import React, { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppDialog from '@crema/components/AppDialog';
import { blue } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';

import { styled } from '@mui/material/styles';
import AppInfoView from '@crema/components/AppInfoView';
import { postDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';
import { generateUniqueID } from '@crema/helpers/StringHelper';
import JoditEditor from 'jodit-react';

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  toolbar: true,
  minHeight: 300,
  maxHeight: 500,
  buttons: [
    'source',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'ul',
    'ol',
    '|',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',
    'video',
    'table',
    'link',
    '|',
    'align',
    'undo',
    'redo',
    'selectall',
    'cut',
    'copy',
    'paste',
    'copyformat',
    '|',
    'hr',
    '|',
    'print',
    'symbol',
    'fullsize',
    'about',
  ],
  uploader: {
    insertImageAsBase64URI: true,
    url: '/api/upload',
    format: 'json',
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: {
      'X-CSRF-TOKEN': 'CSFR-Token',
      Authorization: 'Bearer <JSON Web Token>',
    },
    process: function (resp: any) {
      return {
        files: resp.data,
      };
    },
  },
  style: {
    '& .jodit .jodit-status-bar': {
      background: '#29572E',
      color: 'rgba(255,255,255,0.5)',
    },
  },
};

const CcBccFieldWrapper = styled('div')(() => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '& .ccBccTextField .MuiOutlinedInput-adornedStart': {
      paddingRight: 78,
    },
    '& .ccBccView': {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 18,
      top: 35,
    },
  };
});

export const isValidEmail = (value: string): string => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'primary'
    : 'secondary';
};

type Props = {
  isComposeMail: boolean;
  onCloseComposeMail: (val: boolean) => void;
};

const ComposeMail = (props: Props) => {
  const { isComposeMail, onCloseComposeMail } = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const [isShowBcc, onShowBcc] = useState(false);
  const editor = useRef(null);
  const { user } = useAuthUser();

  const [isShowCC, onShowCC] = useState(false);

  const [isShowChip, onShowChip] = useState(false);

  const { messages } = useIntl();

  const validationSchema = yup.object({
    to: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    cc: yup.string().email(String(messages['validation.emailFormat'])),
    bcc: yup.string().email(String(messages['validation.emailFormat'])),
  });
  const handleBlur = (to: string) => {
    if (to !== '') {
      onShowChip(true);
    }
  };

  return (
    <AppDialog
      sxStyle={{
        '& .MuiDialog-paperWidthSm': {
          maxWidth: 600,
          width: '100%',
        },
        '& .MuiTypography-h6': {
          fontWeight: Fonts.LIGHT,
        },
      }}
      dividers
      open={isComposeMail}
      onClose={() => onCloseComposeMail(false)}
      title={<IntlMessages id='mailApp.compose' />}
    >
      <Formik
        initialValues={{
          to: '',
          cc: '',
          bcc: '',
          subject: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          const mail = {
            id: generateRandomUniqueNumber(),
            isChecked: false,
            isStarred: false,
            label: {
              id: 212,
              name: 'Personal',
              alias: 'personal',
              color: blue[500],
            },

            hasAttachments: false,
            isRead: true,
            folderValue: 122,
            sentOn: dayjs().format('llll'),
            messages: [
              {
                messageId: 1,
                sender: {
                  id: generateUniqueID(),
                  name: user.displayName ? user.displayName : user.username,
                  email: user.email,
                  profilePic: user.photoURL ? user.photoURL : '',
                },
                to: [
                  {
                    name: data.to ? data.to : user.username,
                    email: data.to,
                    profilePic: '',
                  },
                ],
                cc: [],
                bcc: [],
                description: data.content ? data.content : 'No Message',
                isStarred: false,
                sentOn: 'Mon, Oct 14, 2021 8:30 PM',
              },
            ],
            subject: data.subject !== '' ? data.subject : 'No Subject',
          };
          postDataApi('/api/mailApp/compose', infoViewActionsContext, { mail })
            .then(() => {
              infoViewActionsContext.showMessage('Mail Sent Successfully');
              onCloseComposeMail(false);
              resetForm();
              setSubmitting(false);
            })
            .catch((error) => {
              onCloseComposeMail(false);
              infoViewActionsContext.fetchError(error.message);
            });
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
            noValidate
            autoComplete='off'
          >
            <Box
              sx={{
                flex: 1,
              }}
            >
              <CcBccFieldWrapper>
                {!isShowChip ? (
                  <AppTextField
                    className='ccBccTextField'
                    fullWidth
                    label={messages['common.to'] as string}
                    variant='outlined'
                    margin='normal'
                    name='to'
                    onBlur={() => handleBlur(values.to)}
                  />
                ) : (
                  <Chip
                    label={values.to}
                    color={isValidEmail(values.to) ? 'primary' : 'secondary'}
                    onDelete={() => onShowChip(false)}
                    variant='outlined'
                  />
                )}

                <div className='ccBccView'>
                  <Box
                    component='span'
                    sx={{
                      ml: 4,
                      cursor: 'pointer',
                    }}
                    onClick={() => onShowCC(!isShowCC)}
                  >
                    <IntlMessages id='common.cc' />
                  </Box>

                  <Box
                    component='span'
                    sx={{
                      ml: 4,
                      cursor: 'pointer',
                    }}
                    onClick={() => onShowBcc(!isShowBcc)}
                  >
                    <IntlMessages id='common.bcc' />
                  </Box>
                </div>
              </CcBccFieldWrapper>

              {isShowCC ? (
                <Box
                  sx={{
                    width: 1,
                  }}
                >
                  <AppTextField
                    variant='outlined'
                    label={messages['common.cc'] as string}
                    placeholder={messages['common.cc'] as string}
                    fullWidth
                    margin='normal'
                    name='cc'
                  />
                </Box>
              ) : null}

              {isShowBcc ? (
                <Box
                  sx={{
                    width: 1,
                  }}
                >
                  <AppTextField
                    variant='outlined'
                    label={messages['common.bcc'] as string}
                    placeholder={messages['common.bcc'] as string}
                    fullWidth
                    margin='normal'
                    name='bcc'
                  />
                </Box>
              ) : null}
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <AppTextField
                  variant='outlined'
                  placeholder={messages['common.subject'] as string}
                  label={messages['common.subject'] as string}
                  fullWidth
                  margin='normal'
                  name='subject'
                />
              </Box>

              <Box
                sx={{
                  mb: 3,
                }}
              >
                <JoditEditor
                  ref={editor}
                  value={values.content}
                  config={config}
                  // placeholder={messages['common.writeContent'] as string}
                  onChange={(value) => setFieldValue('content', value)}
                />
              </Box>
            </Box>

            <Box
              sx={{
                pt: 3,
                textAlign: 'right',
              }}
            >
              <Button
                sx={{
                  position: 'relative',
                  minWidth: 100,
                }}
                variant='outlined'
                color='primary'
                type='submit'
                disabled={isSubmitting}
              >
                <IntlMessages id='common.send' />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <AppInfoView />
    </AppDialog>
  );
};

export default ComposeMail;

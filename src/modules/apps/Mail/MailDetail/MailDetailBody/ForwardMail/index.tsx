import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button/index';
import InputAdornment from '@mui/material/InputAdornment/index';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { Fonts } from '@crema/constants/AppEnums';
import { MessageType } from '@crema/types/models/apps/Mail';
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

interface Props {
  onSubmitForwardedMail: (mail: MessageType) => void;
  selectedMail: MessageType;
}

const ForwardMail = ({ onSubmitForwardedMail }: Props) => {
  const [isShowCC, onShowCC] = useState(false);
  const editor = useRef(null);
  const onShowCcInput = () => {
    onShowCC(true);
  };

  const { user } = useAuthUser();

  const { messages } = useIntl();
  const validationSchema = yup.object({
    to: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    cc: yup.string().email(String(messages['validation.emailFormat'])),
  });

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 2,
        ml: { md: 12.5 },
        mt: 4,
        mb: 3,
        p: 5,
      }}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          to: '',
          cc: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          console.log('data: ', data);
          setSubmitting(true);
          const mail = {
            messageId: generateRandomUniqueNumber(),
            sender: {
              id: generateUniqueID(),
              name: user.displayName ? user.displayName : user.username,
              email: user.email,
              profilePic: user.photoURL ? user.photoURL : '',
            },
            to: [
              {
                id: generateUniqueID(),
                name: data.to ? data.to : user.username,
                email: data.to,
                profilePic: '',
              },
            ],
            cc: [],
            bcc: [],
            description: data.content ? data.content : 'No Message',
            isStarred: false,
            sentOn: dayjs().format('llll'),
          } as MessageType;
          onSubmitForwardedMail(mail);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <AppTextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{
                        fontWeight: Fonts.MEDIUM,
                      }}
                    >
                      <IntlMessages id='common.to' />
                    </InputAdornment>
                  ),
                }}
                name='to'
              />

              <Box
                component='span'
                sx={{
                  ml: 4,
                  cursor: 'pointer',
                }}
                onClick={onShowCcInput}
              >
                <IntlMessages id='common.cc' />
              </Box>
            </Box>

            {isShowCC ? (
              <Box
                sx={{
                  mb: 4,
                }}
              >
                <AppTextField
                  placeholder={messages['common.cc'] as string}
                  fullWidth
                  name='cc'
                />
              </Box>
            ) : null}

            <Box
              sx={{
                mb: 4,
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

            <div style={{ textAlign: 'right' }}>
              <Button type='submit' color='primary' variant='outlined'>
                <IntlMessages id='common.send' />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ForwardMail;

import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AddContactForm from './AddContactForm';
import AppDialog from '@crema/components/AppDialog';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { ContactObjType } from '@crema/types/models/apps/Contact';
import { useIntl } from 'react-intl';
import { useContactActionsContext } from '../../context/ContactContextProvider';
import { getDateObject, getFormattedDate } from '@crema/helpers/DateHelper';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

type Props = {
  isAddContact: boolean;
  handleAddContactClose: () => void;
  selectContact?: ContactObjType | null;
  onUpdateContact?: (newContact: ContactObjType) => void;
};

const CreateContact = (props: Props) => {
  const {
    isAddContact,
    handleAddContactClose,
    selectContact,
    onUpdateContact,
  } = props;
  const { reCallAPI } = useContactActionsContext();

  const { messages } = useIntl();

  const validationSchema = yup.object({
    name: yup.string().required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    contact: yup
      .string()
      .required(String(messages['validation.phoneNumberRequired'])),
  });
  const infoViewActionsContext = useInfoViewActionsContext();

  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg',
  );
  useEffect(() => {
    setUserImage(
      selectContact && selectContact.image
        ? selectContact.image
        : '/assets/images/placeholder.jpg',
    );
  }, [selectContact]);

  return (
    <AppDialog
      sxStyle={{
        '& .MuiDialog-paperWidthSm': {
          maxWidth: 900,
          height: 600,
        },
      }}
      maxScrollHeight={600}
      open={isAddContact}
      onClose={() => handleAddContactClose()}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          name: selectContact ? selectContact.name : '',
          email: selectContact ? selectContact.email : '',
          contact: selectContact ? selectContact.contact : '',
          birthday:
            selectContact && selectContact.birthday
              ? getDateObject(selectContact.birthday as string)
              : getDateObject(),
          website:
            selectContact && selectContact.website ? selectContact.website : '',
          company:
            selectContact && selectContact.company ? selectContact.company : '',
          address:
            selectContact && selectContact.address ? selectContact.address : '',
          facebookId:
            selectContact && selectContact.facebookId
              ? selectContact.facebookId
              : '',
          twitterId:
            selectContact && selectContact.twitterId
              ? selectContact.twitterId
              : '',
          notes:
            selectContact && selectContact.notes ? selectContact.notes : '',
          label:
            selectContact && selectContact.label ? selectContact.label : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectContact) {
            const newContact = {
              ...data,
              id: selectContact.id,
              isStarred: selectContact.isStarred,
              isFrequent: selectContact.isFrequent,
              image: userImage,
              birthday: getFormattedDate(data.birthday),
            } as ContactObjType;
            putDataApi('/api/contactApp/contact/', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact updated successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
            onUpdateContact!(newContact);
          } else {
            const newContact = {
              ...data,
              id: generateRandomUniqueNumber(),
              isStarred: false,
              isFrequent: Math.random() > 0.5,
              image: userImage,
              birthday: getFormattedDate(data.birthday),
            };
            postDataApi('/api/contactApp/compose', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact created successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <AddContactForm
            setUserImage={setUserImage}
            userImage={userImage}
            values={values as ContactObjType}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateContact;

CreateContact.defaultProps = {
  selectContact: null,
};

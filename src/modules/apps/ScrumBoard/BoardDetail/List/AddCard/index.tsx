import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppConfirmDialog from '@crema/components/AppConfirmDialog';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddCardForm from './AddCardForm';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import CardHeader from './CardHeader';
import {
  AttachmentType,
  BoardType,
  CardListType,
  CardType,
} from '@crema/types/models/apps/ScrumbBoard';
import { useIntl } from 'react-intl';
import { getDateObject } from '@crema/helpers/DateHelper';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

type AddCardProps = {
  isAddCardOpen: boolean;
  onCloseAddCard: () => void;
  setData: (data: BoardType) => void;
  board: BoardType;
  list: CardListType | undefined;
  selectedCard: CardType | null;
  setSelectedCard: (data: CardType) => void;
};

const AddCard: React.FC<AddCardProps> = ({
  isAddCardOpen,
  onCloseAddCard,
  board,
  list,
  selectedCard,
  setData,
}) => {
  const { messages } = useIntl();
  const validationSchema = yup.object({
    title: yup.string().required(String(messages['validation.titleRequired'])),
  });

  const infoViewActionsContext = useInfoViewActionsContext();

  const { user } = useAuthUser();
  console.log('selectedCard: ', selectedCard);
  const [checkedList, setCheckedList] = useState(() =>
    selectedCard ? selectedCard.checkedList : [],
  );

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [selectedMembers, setMembersList] = useState(() =>
    selectedCard ? selectedCard.members : [],
  );

  const [selectedLabels, setSelectedLabels] = useState(() =>
    selectedCard ? selectedCard.label : [],
  );

  const [comments, setComments] = useState(() =>
    selectedCard ? selectedCard.comments : [],
  );

  const [attachments, setAttachments] = useState(() =>
    selectedCard ? selectedCard.attachments : [],
  );

  const onAddAttachments = (files: AttachmentType[]) => {
    setAttachments([...attachments, ...files]);
  };

  useEffect(() => {
    if (selectedCard) {
      setCheckedList(selectedCard ? selectedCard.checkedList : []);
      setMembersList(selectedCard ? selectedCard.members : []);
      setSelectedLabels(selectedCard ? selectedCard.label : []);
      setComments(selectedCard ? selectedCard.comments : []);
      setAttachments(selectedCard ? selectedCard.attachments : []);
    }
  }, [selectedCard]);

  const onDeleteCard = () => {
    const boardId = board.id;
    const listId = list!.id;
    const cardId = selectedCard!.id;
    postDataApi<BoardType>(
      '/api/scrumboard/delete/card',
      infoViewActionsContext,
      {
        boardId,
        listId,
        cardId,
      },
    )
      .then((data) => {
        setData(data);
        setDeleteDialogOpen(false);
        onCloseAddCard();
        infoViewActionsContext.showMessage('Card Deleted Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onClickDeleteIcon = () => {
    if (selectedCard) {
      setDeleteDialogOpen(true);
    } else {
      onCloseAddCard();
    }
  };

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: 320, sm: 400, md: 600, lg: 900 },
          boxSizing: 'border-box',
        },
      }}
      anchor='right'
      open={isAddCardOpen}
      onClose={onCloseAddCard}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          title: selectedCard ? selectedCard.title : '',
          desc: selectedCard && selectedCard.desc ? selectedCard.desc : '',
          label: selectedCard && selectedCard.label ? selectedCard.label : [],
          members:
            selectedCard && selectedCard.members ? selectedCard.members : [],
          date:
            selectedCard && selectedCard.date
              ? getDateObject(selectedCard.date)
              : getDateObject(),
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectedCard) {
            const editedCard = {
              ...selectedCard,
              comments: comments,
              ...data,
              attachments: attachments,
              members: selectedMembers,
              label: selectedLabels,
              checkedList: checkedList.filter((item) => item.title !== ''),
            };
            putDataApi<BoardType>(
              '/api/scrumboard/edit/card',
              infoViewActionsContext,
              {
                board,
                list,
                card: editedCard,
              },
            )
              .then((data) => {
                setData(data);
                infoViewActionsContext.showMessage('Card Edited Successfully!');
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          } else {
            const newCard = {
              id: generateRandomUniqueNumber(),
              attachments: attachments,
              checkedList: [],
              comments: comments,
              ...data,
              label: selectedLabels,
              members: selectedMembers,
            };
            postDataApi<BoardType>(
              '/api/scrumboard/add/card',
              infoViewActionsContext,
              {
                board,
                list,
                card: newCard,
              },
            )
              .then((data) => {
                setData(data);
                infoViewActionsContext.showMessage('Card Added Successfully!');
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          onCloseAddCard();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <>
            <CardHeader
              onAddAttachments={onAddAttachments}
              onClickDeleteIcon={onClickDeleteIcon}
              onCloseAddCard={onCloseAddCard}
            />
            <Box
              sx={{
                height: 'calc(100% - 60px)',
              }}
            >
              <AddCardForm
                values={values}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                board={board}
                list={list}
                checkedList={checkedList}
                onCloseAddCard={onCloseAddCard}
                setCheckedList={setCheckedList}
                comments={comments}
                setComments={setComments}
                authUser={user}
                attachments={attachments}
                setAttachments={setAttachments}
                selectedLabels={selectedLabels}
                setSelectedLabels={setSelectedLabels}
                selectedMembers={selectedMembers}
                setMembersList={setMembersList}
                selectedCard={selectedCard}
              />
            </Box>
          </>
        )}
      </Formik>

      {isDeleteDialogOpen ? (
        <AppConfirmDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteCard}
          title={<IntlMessages id='scrumboard.deleteCard' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </Drawer>
  );
};

export default AddCard;

AddCard.defaultProps = {
  board: undefined,
  list: undefined,
  selectedCard: null,
};

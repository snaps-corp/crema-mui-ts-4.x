import Box from "@mui/material/Box";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Form } from "formik";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useIntl } from "react-intl";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { Autocomplete } from "@mui/lab";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppScrollbar from "@crema/components/AppScrollbar";
import CardAttachments from "./CardAttachments";
import CardCheckedList from "./CardCheckedList";
import CardComments from "./CardComments";

import { useScrumContext } from "../../../../context/ScrumContextProvider";
import {
  AttachmentType,
  BoardType,
  CardListType,
  CardType,
  CheckedListType,
  LabelType,
  MemberType,
} from "@crema/types/models/apps/ScrumbBoard";
import { AuthUserType } from "@crema/types/models/AuthUser";
import { DatePicker } from "@mui/x-date-pickers";
import { generateRandomUniqueNumber } from "@crema/helpers/Common";

type Props = {
  board: BoardType;
  list: CardListType | undefined;
  checkedList: CheckedListType[];
  setCheckedList: (checkList: CheckedListType[]) => void;
  comments: any[];
  values?: any;
  setFieldValue: (name: string, value: any) => void;
  setComments: (comments: any[]) => void;
  authUser: AuthUserType | null;
  attachments: AttachmentType[];
  setAttachments: (attachments: AttachmentType[]) => void;
  selectedLabels: LabelType[];
  setSelectedLabels: (lables: LabelType[]) => void;
  selectedMembers: MemberType[];
  setMembersList: (members: MemberType[]) => void;
  selectedCard: CardType | null;
  onCloseAddCard: () => void;
  isSubmitting?: boolean;
  setData?: (data: BoardType) => void;
};

const AddCardForm = (props: Props) => {
  const {
    values,
    setFieldValue,
    checkedList,
    setCheckedList,
    comments,
    setComments,
    authUser,
    attachments,
    setAttachments,
    selectedLabels,
    setSelectedLabels,
    selectedMembers,
    setMembersList,
    selectedCard,
    onCloseAddCard,
    isSubmitting,
  } = props;

  const { messages } = useIntl();
  const { labelList, memberList } = useScrumContext();

  const onDeleteCheckedItem = (id: number) => {
    const updatedList = checkedList.filter((item) => item.id !== id);
    setCheckedList(updatedList);
  };

  const onAddNewCheckedItem = () => {
    const item = {
      id: generateRandomUniqueNumber(),
      title: "",
    };
    const updatedList = checkedList.concat(item);
    setCheckedList(updatedList);
  };

  const onSetCheckedItemText = (title: string, id: number) => {
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        item.title = title;
        return item;
      } else {
        return item;
      }
    });
    setCheckedList(updatedList);
  };

  const onAddNewComment = (comment: any) => {
    setComments(
      comments.concat({
        comment: comment,
        sender: {
          id: authUser!.id,
          name: authUser!.displayName ? authUser!.displayName : "User",
          image: authUser!.photoURL,
        },
        date: dayjs().format("ll"),
      }),
    );
  };

  const onDeleteAttachment = (id: number) => {
    const updatedAttachments = attachments.filter(
      (attachment) => attachment.id !== id,
    );
    setAttachments(updatedAttachments);
  };

  return (
    <Form
      style={{
        width: "100%",
        height: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <AppScrollbar
        sx={{
          height: "calc(100% - 70px)",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            pt: 6,
            px: { xs: 5, lg: 8, xl: 10 },
            pb: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
          }}
        >
          <Box
            sx={{
              mb: 3,
              width: { md: "60%" },
            }}
          >
            <AppTextField
              sx={{
                width: "100%",
              }}
              variant="outlined"
              label={<IntlMessages id="common.title" />}
              name="title"
            />
          </Box>

          <Box
            sx={{
              ml: { md: 8 },
              mb: 3,
              width: { md: "40%" },
              "& .MuiFormControl-root": {
                width: "100%",
              },
            }}
          >
            <DatePicker
              label={<IntlMessages id="common.date" />}
              value={values.date}
              onChange={(value: any) => setFieldValue("date", value)}
            />
          </Box>
        </Box>

        <Box
          sx={{
            pb: 5,
            px: { xs: 5, lg: 8, xl: 10 },
          }}
        >
          <AppTextField
            name="desc"
            multiline
            sx={{
              width: "100%",
              mb: 5,
            }}
            rows="3"
            variant="outlined"
            placeholder={messages["common.description"] as string}
          />

          <AppGridContainer
            sx={{
              mb: 3,
            }}
          >
            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={labelList}
                getOptionLabel={(option) => option.name}
                value={selectedLabels}
                onChange={(event, value) => setSelectedLabels(value)}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={<IntlMessages id="common.label" />}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={memberList}
                autoHighlight
                getOptionLabel={(option) => option.name}
                value={selectedMembers}
                onChange={(event, value) => setMembersList(value)}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ display: "flex", alignItems: "center" }}
                    {...props}
                  >
                    {option.image ? (
                      <Avatar src={option.image} />
                    ) : (
                      <Avatar>{option?.name?.toUpperCase()}</Avatar>
                    )}
                    <Box ml={4}>{option?.name}</Box>
                  </Box>
                )}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={<IntlMessages id="common.members" />}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </AppGridContainer>

          <CardAttachments
            attachments={attachments}
            onDeleteAttachment={onDeleteAttachment}
          />

          {selectedCard ? (
            <CardCheckedList
              onAddNewCheckedItem={onAddNewCheckedItem}
              checkedList={checkedList}
              onDeleteCheckedItem={onDeleteCheckedItem}
              onSetCheckedItemText={onSetCheckedItemText}
            />
          ) : null}

          <Divider
            sx={{
              mb: { xs: 4, md: 6 },
              mx: { xs: -5, lg: -8, xl: -10 },
            }}
          />

          <CardComments comments={comments} onAddNewComment={onAddNewComment} />
        </Box>
      </AppScrollbar>
      <Box
        sx={{
          px: 8,
          py: 4,
          textAlign: "right",
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Button
          sx={{
            px: 8,
          }}
          color="primary"
          variant="outlined"
          disabled={isSubmitting}
          type="submit"
        >
          <IntlMessages id="common.done" />
        </Button>
        <Button
          sx={{
            px: 8,
            ml: 2.5,
          }}
          color="primary"
          variant="outlined"
          onClick={onCloseAddCard}
        >
          <IntlMessages id="common.cancel" />
        </Button>
      </Box>
    </Form>
  );
};

export default AddCardForm;

AddCardForm.defaultProps = {
  comments: [],
  attachments: [],
  selectedLabels: [],
  selectedMembers: [],
  isSubmitting: false,
};

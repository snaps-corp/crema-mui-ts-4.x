import Box from "@mui/material/Box";
import AppList from "@crema/components/AppList";
import CommentItem from "./CommentItem";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import { styled } from "@mui/material/styles";
import { CommentType } from "@crema/types/models/apps/Wall";

const CommentsListWrapper = styled("div")(({ theme }) => ({
  borderTop: `solid 1px ${theme.palette.divider}`,
  paddingTop: 20,
  marginLeft: -20,
  marginRight: -20,
  paddingLeft: 20,
  paddingRight: 20,
}));

type Props = {
  comments: CommentType[];
};

const CommentsList = ({ comments }: Props) => {
  return (
    <CommentsListWrapper>
      <Box component="p" mb={5} fontSize={16} fontWeight={Fonts.MEDIUM}>
        <IntlMessages id="wall.comments" />
      </Box>
      <AppList
        data={comments}
        renderRow={(item, index) => <CommentItem key={index} item={item} />}
      />
    </CommentsListWrapper>
  );
};

export default CommentsList;

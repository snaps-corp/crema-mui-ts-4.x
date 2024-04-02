import Box from "@mui/material/Box";
import { useIntl } from "react-intl";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import TagCloud from "./TagCloud";
import AppCard from "@crema/components/AppCard";
import AppSearchBar from "@crema/components/AppSearchBar";
import { BlogSidebarType } from "@crema/types/models/extrapages/Blog";

type Props = {
  blogSidebar?: BlogSidebarType;
};

const BlogSidebarCard = ({ blogSidebar }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard>
      <Box
        sx={{
          mb: 5.5,
          pb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <AppSearchBar
          disableFocus
          iconPosition="right"
          overlap={false}
          placeholder={messages["common.searchHere"] as string}
        />
      </Box>
      <RecentPost recentPost={blogSidebar?.recentPost} />
      <Categories categories={blogSidebar?.categories} />
      <TagCloud tag={blogSidebar?.tag} />
    </AppCard>
  );
};

export default BlogSidebarCard;

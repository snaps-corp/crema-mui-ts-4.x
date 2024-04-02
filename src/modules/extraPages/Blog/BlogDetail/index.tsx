import Grid from "@mui/material/Grid";
import BlogSidebarCard from "../BlogSidebarCard";
import BlogDetailHeader from "./BlogDetailHeader";
import BlogDetailContent from "./BlogDetailContent";
import BlogComment from "./BlogComment";
import AppAnimate from "@crema/components/AppAnimate";
import AppGridContainer from "@crema/components/AppGridContainer";
import {
  BlogDetailType,
  BlogSidebarType,
} from "@crema/types/models/extrapages/Blog";

type Props = {
  blogDetail?: BlogDetailType;
  blogSidebar?: BlogSidebarType;
};

const BlogDetail = ({ blogDetail, blogSidebar }: Props) => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppGridContainer>
        <Grid item xs={12}>
          <BlogDetailHeader
            title={blogDetail?.blogDetailContent.title}
            blogDetailHeader={blogDetail?.blogDetailHeader}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          xl={3}
          sx={{
            order: { md: 2 },
            position: { md: "sticky" },
            top: { md: 70 },
            bottom: { md: 0 },
            zIndex: 2,
            alignSelf: { md: "flex-start" },
          }}
        >
          <BlogSidebarCard blogSidebar={blogSidebar} />
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={9} sx={{ order: { md: 1 } }}>
          <BlogDetailContent
            blogDetailContent={blogDetail?.blogDetailContent}
          />
          <BlogComment comment={blogDetail?.blogComment} />
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  );
};

export default BlogDetail;

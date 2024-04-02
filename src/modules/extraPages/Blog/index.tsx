import { useGetDataApi } from "@crema/hooks/APIHooks";
import AppLoader from "@crema/components/AppLoader";
import BlogContent from "./BlogContent";

import { BlogType } from "@crema/types/models/extrapages/Blog";

const Blogs = () => {
  const [{ apiData, loading }] = useGetDataApi<BlogType>("/pages/blogs");

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <BlogContent
          blogSidebar={apiData.blogSidebar}
          blogContent={apiData.blogContent}
        />
      )}
    </>
  );
};
export default Blogs;

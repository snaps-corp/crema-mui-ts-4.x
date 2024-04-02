import BlogCard from "./BlogCard";
import AppGrid from "@crema/components/AppGrid";
import { useNavigate } from "react-router-dom";
import type { BlogContentType } from "@crema/types/models/extrapages/Blog";

type Props = {
  blogs: BlogContentType[];
};

const Blogs = ({ blogs }: Props) => {
  const navigate = useNavigate();
  const onViewBlogDetail = (data: BlogContentType, isEdit?: boolean) => {
    if (isEdit) navigate(`/extra-pages/edit-blog/${data.id}`);
    else navigate(`/extra-pages/blog-details/${data.id}`);
  };

  return (
    <AppGrid
      responsive={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
      }}
      data={blogs}
      renderRow={(blog: BlogContentType, index) => (
        <BlogCard key={index} blog={blog} onViewBlogDetail={onViewBlogDetail} />
      )}
    />
  );
};

export default Blogs;

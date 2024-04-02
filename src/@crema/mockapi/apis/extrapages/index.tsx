import mock from '../MockConfig';
import { blogContent, blogSidebar } from '@crema/mockapi/fakedb/extraPages';
import { BlogContentType } from '@crema/types/models/extrapages/Blog';

let blogContentData = blogContent;

mock.onGet('/pages/blogs').reply(() => {
  return [200, { blogContent: blogContentData, blogSidebar }];
});

mock.onGet('/pages/blogs/detail').reply((request) => {
  const { id } = request.params;
  let blogDetail: BlogContentType | undefined;
  if (id) blogDetail = blogContentData.find((item) => String(item.id) === id);
  else blogDetail = blogContentData[0];

  return [200, { blogDetail, blogSidebar }];
});

mock.onPost('/pages/blogs').reply((request) => {
  const { blog } = JSON.parse(request.data);
  blogContentData.push(blog);

  return [200, blogContentData];
});

mock.onPut('/pages/blogs').reply((request) => {
  const { blog } = JSON.parse(request.data);

  blogContentData = blogContentData.map((item) =>
    item.id === blog.id ? blog : item,
  );

  return [200, blogContentData];
});

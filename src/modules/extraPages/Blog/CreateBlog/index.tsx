import React, { useEffect, useId, useState } from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import { Box } from '@mui/material';
import BlogSidebar from './Sidebar';
import BlogContent from './Content';
import { Form, Formik } from 'formik';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { CreateNewBlog } from './NewBlogTemplete';
import { useNavigate } from 'react-router-dom';
import type {
  BlogContentType,
  FileType,
  TagType,
} from '@crema/types/models/extrapages/Blog';

type Props = {
  selectedBlog?: BlogContentType;
};

export const CreateBlog = ({ selectedBlog }: Props) => {
  const id = useId();
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<FileType[]>([]);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedBlog) {
      setSelectedTags(selectedBlog?.blogDetailContent?.tag);
      setUploadedFiles([
        {
          preview: selectedBlog?.blogDetailContent?.cardMedia,
        },
      ]);
    }
  }, [selectedBlog]);
  return (
    <>
      <Box
        component='h2'
        sx={{
          fontSize: 16,
          color: 'text.primary',
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        {selectedBlog ? 'Edit Blog' : 'Create a new blog'}
      </Box>

      <Formik
        validateOnChange={true}
        initialValues={{
          title: selectedBlog?.blogDetailContent?.title || '',
          description: selectedBlog?.blogDetailContent?.description || '',
          tag: selectedBlog?.blogDetailContent?.tag || [],
          cardMedia: selectedBlog?.blogDetailContent?.cardMedia || '',
          metatitle: selectedBlog?.blogDetailContent?.meta?.metatitle || '',
          metadesc: selectedBlog?.blogDetailContent?.meta?.metadesc || '',
          keywords: selectedBlog?.blogDetailContent?.meta?.keywords || '',
          content: '',
          preview: '',
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectedBlog) {
            const newBlog = {
              ...selectedBlog,
              blogDetailContent: {
                ...selectedBlog.blogDetailContent,
                title: data.title,
                description: data.description,
                content: data.content,
                tag: selectedTags,
                cardMedia:
                  uploadedFiles[0]?.preview ||
                  selectedBlog.blogDetailContent.cardMedia,
                meta: {
                  keywords: data.keywords,
                  metadesc: data.metadesc,
                  metatitle: data.metatitle,
                },
                post: {
                  user: '/assets/images/avatar/A12.jpg',
                  userName: 'John Deuo',
                  userPosition: 'Co-founder',
                  description: selectedBlog.blogDetailContent.post.description,
                },
              },
            };
            putDataApi('/pages/blogs', infoViewActionsContext, {
              blog: newBlog,
            })
              .then(() => {
                navigate('/extra-pages/blog');
                infoViewActionsContext.showMessage(
                  'Blog updated successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          } else {
            postDataApi('/pages/blogs', infoViewActionsContext, {
              blog: CreateNewBlog({
                ...data,
                id,
                content: data.content,
                srcImg: uploadedFiles[0]?.preview,
                tag: selectedTags,
              }),
            })
              .then(() => {
                infoViewActionsContext.showMessage(
                  'Blog created successfully!',
                );
                navigate('/extra-pages/blog');
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form noValidate autoComplete='off'>
            <AppGridContainer>
              <BlogContent
                content={selectedBlog?.blogDetailContent?.content || ''}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                setFieldValue={setFieldValue}
              />
              <BlogSidebar
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </AppGridContainer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateBlog;

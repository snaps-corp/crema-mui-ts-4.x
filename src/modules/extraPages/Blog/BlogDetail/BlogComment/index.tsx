import React, { useState } from 'react';
import BlogCommentForm from './BlogCommentForm';
import BlogCommentList from './BlogCommentList';
import { Box, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import { BlogCommentType } from '@crema/types/models/extrapages/Blog';
import { useIntl } from 'react-intl';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

const validationSchema = (messages: any) =>
  yup.object({
    name: yup.string().required(messages['validation.nameRequired'] as string),
    email: yup
      .string()
      .email(messages['validation.emailFormat'] as string)
      .required(messages['validation.emailRequired'] as string),
    comment: yup.string().required(messages['validation.comment'] as string),
  });

type Props = {
  comment?: BlogCommentType[];
};

const BlogComment = ({ comment }: Props) => {
  const { user } = useAuthUser();
  const { messages } = useIntl();

  const [comments, setComments] = useState<BlogCommentType[]>(comment || []);

  const onCommentSend = (data: Partial<BlogCommentType>) => {
    const item: BlogCommentType = {
      id: generateRandomUniqueNumber(),
      name: data.name!,
      image: user.photoURL,
      duration: dayjs().format('ll'),
      comment: data.comment!,
    };
    const newList = comments.concat(item);
    setComments(newList);
    console.log('newList', newList);
  };

  return (
    <AppCard>
      <BlogCommentList comments={comments} />
      <Box sx={{ position: 'relative' }}>
        <Typography
          component='h3'
          sx={{
            mb: 7.5,
            fontSize: { xs: 18, md: 20 },
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id='extraPages.writeComments' />
        </Typography>
        <Formik
          validateOnChange={false}
          validateOnBlur={true}
          initialValues={{
            name: '',
            email: '',
            comment: '',
          }}
          validationSchema={validationSchema(messages)}
          onSubmit={(data, { resetForm }) => {
            onCommentSend(data);
            resetForm();
          }}
        >
          <BlogCommentForm />
        </Formik>
      </Box>
    </AppCard>
  );
};

export default BlogComment;

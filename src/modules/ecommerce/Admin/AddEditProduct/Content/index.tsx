import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppCard from '@crema/components/AppCard';
import ImgUpload from './ImageUpload';
import AppScrollbar from '@crema/components/AppScrollbar';
import Slide from '@mui/material/Slide';
import { FileType } from '@crema/types/models/ecommerce/EcommerceApp';
import JoditEditor from 'jodit-react';

const config = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
  toolbar: true,
  minHeight: 300,
  maxHeight: 500,
  buttons: [
    'source',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'ul',
    'ol',
    '|',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',
    'video',
    'table',
    'link',
    '|',
    'align',
    'undo',
    'redo',
    'selectall',
    'cut',
    'copy',
    'paste',
    'copyformat',
    '|',
    'hr',
  ],
  uploader: {
    insertImageAsBase64URI: true,
    url: '/api/upload',
    format: 'json',
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: {
      'X-CSRF-TOKEN': 'CSFR-Token',
      Authorization: 'Bearer <JSON Web Token>',
    },
    process: function (resp: any) {
      return {
        files: resp.data,
      };
    },
  },
  style: {
    '& .jodit .jodit-status-bar': {
      background: '#29572E',
      color: 'rgba(255,255,255,0.5)',
    },
  },
};

type Props = {
  content: string;
  uploadedFiles: FileType[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const BlogContent = ({
  content,
  uploadedFiles,
  setUploadedFiles,
  setFieldValue,
}: Props) => {
  const editor = useRef(null);
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={8}>
        <AppScrollbar style={{ height: '700px' }}>
          <AppCard>
            <AppTextField
              name='title'
              variant='outlined'
              sx={{
                width: '100%',
                my: 2,
              }}
              label='Product Name'
            />

            <Box component='p' sx={{ mt: 3, fontSize: 16 }}>
              Description*
            </Box>
            <Box
              sx={{
                width: '100%',
                my: 2,
              }}
            >
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                // placeholder={messages['common.writeContent'] as string}
                onChange={(value) => setFieldValue('description', value)}
              />
            </Box>
            <Box component='p' sx={{ mt: 3, mb: 2, fontSize: 16 }}>
              Images
            </Box>
            <ImgUpload
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
          </AppCard>
        </AppScrollbar>
      </Grid>
    </Slide>
  );
};

export default BlogContent;

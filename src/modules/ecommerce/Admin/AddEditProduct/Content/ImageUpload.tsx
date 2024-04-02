import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import AppGrid from '@crema/components/AppGrid';
import { Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';

import UploadModern from '../../../../thirdParty/reactDropzone/components/UploadModern';
import PreviewThumb from '../../../../thirdParty/reactDropzone/components/PreviewThumb';
import { FileType } from '@crema/types/models/ecommerce/EcommerceApp';

type Props = {
  uploadedFiles: FileType[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
};

const ImgUpload = ({ uploadedFiles, setUploadedFiles }: Props) => {
  const dropzone = useDropzone({
    accept: {
      'image/png': ['.png', '.jpeg', '.jpg'],
    },
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });
  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const onDeleteUploadFile = (file: FileType) => {
    dropzone.acceptedFiles.splice(
      dropzone.acceptedFiles.indexOf(file as File),
      1,
    );
    setUploadedFiles([...dropzone.acceptedFiles]);
  };

  return (
    <section className='container' style={{ cursor: 'pointer' }}>
      <UploadModern
        dropzone={dropzone}
        customContent={
          <>
            <img
              src={'/assets/icon/upload.svg'}
              width={40}
              height={40}
              alt='upload'
            />

            <p>
              <Box
                component='span'
                sx={{ color: 'primary.main', fontWeight: Fonts.MEDIUM }}
              >
                Click to upload
              </Box>{' '}
              or drag and drop
            </p>
            <Box component='p' sx={{ mt: 1 }}>
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Box>
          </>
        }
      />
      <AppGrid
        sx={{
          maxWidth: 500,
        }}
        data={uploadedFiles}
        column={4}
        itemPadding={5}
        renderRow={(file, index) => (
          <PreviewThumb
            file={file}
            onDeleteUploadFile={onDeleteUploadFile}
            key={index + file.path}
          />
        )}
      />
    </section>
  );
};

export default ImgUpload;

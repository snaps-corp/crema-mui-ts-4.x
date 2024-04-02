import React, { useEffect, useState } from 'react';
import UploadModern from '../components/UploadModern';
import Box from '@mui/material/Box';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import FileRow from '../components/FileRow';
import { FileType } from '@crema/types/models/ecommerce/EcommerceApp';

const StyledDropzone = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState<FileType[]>([]);

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
    <Box sx={{ position: 'relative' }}>
      <UploadModern
        uploadText='Drag n drop some files here, or click to select files'
        dropzone={dropzone}
      />
      <aside>
        <AppList
          data={uploadedFiles}
          renderRow={(file, index) => (
            <FileRow
              key={index + file.path}
              file={file}
              onDeleteUploadFile={onDeleteUploadFile}
            />
          )}
        />
      </aside>
    </Box>
  );
};

export default StyledDropzone;

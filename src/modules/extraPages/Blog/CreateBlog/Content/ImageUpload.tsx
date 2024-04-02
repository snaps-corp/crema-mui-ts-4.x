import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import AppGrid from '@crema/components/AppGrid';
import PreviewThumb from '../../../../thirdParty/reactDropzone/components/PreviewThumb';
import UploadModern from '../../../../thirdParty/reactDropzone/components/UploadModern';
import type { FileType } from '@crema/types/models/extrapages/Blog';

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
        uploadText='Drag n drop some files here, or click to select files'
        dropzone={dropzone}
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

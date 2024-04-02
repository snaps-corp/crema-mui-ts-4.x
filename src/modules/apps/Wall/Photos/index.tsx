import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppCard from '@crema/components/AppCard';
import AppGrid from '@crema/components/AppGrid';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import AppMediaViewer from '@crema/components/AppMediaViewer';
import { ImageType } from '@crema/types/models/apps/Wall';

const StyledImage = styled('img')(({ theme }: any) => ({
  borderRadius: theme.cardRadius,
  display: 'block',
  width: '100%',
  cursor: 'pointer',
}));

type Props = {
  photos: ImageType[];
};
const Photos = ({ photos }: Props) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.photos'] as string}
      action={messages['common.viewAll'] as string}
    >
      <div>
        <AppGrid
          data={photos}
          column={3}
          itemPadding={4}
          responsive={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
          }}
          renderRow={(photo, index) => (
            <StyledImage
              onClick={() => setIndex(index)}
              className={clsx('card-hover')}
              key={index}
              src={photo.thumb}
              alt='user'
            />
          )}
        />
      </div>
      <AppMediaViewer
        index={index}
        medias={photos.map((data) => {
          return {
            url: data.thumb,
            mime_type: 'image/*',
          };
        })}
        onClose={onClose}
      />
    </AppCard>
  );
};

export default Photos;

import React, { useState } from 'react';
import { Button, Checkbox, lighten } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { ProductDataType } from '@crema/types/models/ecommerce/EcommerceApp';

import { styled } from '@mui/material/styles';
import { postDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrainHubSliderRoot = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
  };
});

const MediaSlider = ({ children }: any) => {
  return (
    <Box
      sx={{
        width: '100%',
        '& .slick-slider': {
          pb: 5,
        },
        '& .slick-track': {
          display: 'flex',
          '& .slick-slide': {
            height: '500px',
            '& > div': {
              height: '100%',
            },
          },
        },
        '& .slick-slide img': {
          display: 'inline-block',
        },
        '& .slick-dots': {
          bottom: 0,
          // display: 'flex !important',
          // justifyContent: 'center',
          // alignItems: 'center',
          // listStyle: 'none',
          // gap: '10px',

          '& li': {
            width: 10,
            height: 10,
            '& button': {
              width: 10,
              height: 10,
              padding: 0,
              // borderRadius: '50%',
              // backgroundColor: (theme) =>
              //   lighten(theme.palette.common.black, 0.5),
              // color: (theme) => lighten(theme.palette.common.black, 0.5),
              // overflow: 'hidden',
            },
            '& button:before': {
              fontSize: 0,
              backgroundColor: (theme) =>
                lighten(theme.palette.common.black, 0.5),
              width: 10,
              height: 10,
              borderRadius: '50%',
            },
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

type ProductImageSlideProps = {
  product: ProductDataType;
};

const ProductImageSlide: React.FC<ProductImageSlideProps> = ({ product }) => {
  const [value, setValue] = useState(0);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  const slides = product.image.map((data: any) => (
    <img src={data.src} alt='' key={data.src} />
  ));
  const onChange = (value: number) => {
    setValue(value);
  };

  const onAddToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`,
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onButNowToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        navigate('/ecommerce/cart');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid item sm={12} md={4}>
      <BrainHubSliderRoot>
        <MediaSlider>
          <div
            style={{
              height: 'auto',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Slider {...settings}>
              {product.image.map((item, index) => (
                <Box key={index} sx={{ px: 3, py: 3, height: '100%' }}>
                  <img
                    src={item.src}
                    alt='watch'
                    key={item.src}
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </div>
        </MediaSlider>
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2,
          }}
        >
          <Checkbox
            sx={{
              color: (theme) => theme.palette.warning.main,
              '&.Mui-checked': {
                color: (theme) => theme.palette.warning.main,
              },
            }}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteOutlinedIcon />}
          />
        </Box>
      </BrainHubSliderRoot>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={onAddToCard}
          style={{ marginRight: 20, width: 140 }}
        >
          Add to cart
        </Button>
        <Button
          style={{ width: 140 }}
          variant='contained'
          color='secondary'
          onClick={onButNowToCard}
        >
          Buy now
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductImageSlide;

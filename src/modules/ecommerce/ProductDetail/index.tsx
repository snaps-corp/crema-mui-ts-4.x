import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import { useGetDataApi } from '@crema/hooks/APIHooks';

import Header from './Header';
import ProductView from './ProductView/index';
import SimilarProduct from './SimilarProduct';

import ProductImageSlide from './ProductImageSlide';
import AppLoader from '@crema/components/AppLoader';
import { ProductDataType } from '@crema/types/models/ecommerce/EcommerceApp';
import { isEmptyObject } from '@crema/helpers/ApiHelper';

const ProductDetail = () => {
  const { id } = useParams();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi<ProductDataType>(
      '/api/ecommerce/get',
      {} as ProductDataType,
      { id: id },
      false,
    );

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return (
    <>
      {loading || isEmptyObject(currentProduct) ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      )}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;

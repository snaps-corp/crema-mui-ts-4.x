import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import CategoryItem from './CategoryItem';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';
import { CategoriesType } from '@crema/types/models/dashboards/Widgets';

const getData = (data: CategoriesType[]) => {
  return data;
};

type CategoriesProps = {
  data: CategoriesType[];
};

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const { messages } = useIntl();
  const category = getData(data);

  const [categoryList, handleList] = useState(category);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: CategoriesType,
  ) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item) =>
      item.id === category.id ? category : item,
    );
    handleList(list);
  };

  return (
    <AppCard
      title={messages['dashboard.categories'] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
      sxStyle={{ height: 1 }}
    >
      <AppScrollbar sx={{ maxHeight: 218 }}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingTop: 2,

            '& li': {
              width: '50%',
              padding: '0px 20px',
              '& .MuiListItemIcon-root': {
                minWidth: 0,
              },
            },
          }}
        >
          {categoryList.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          })}
        </List>
      </AppScrollbar>
    </AppCard>
  );
};

export default Categories;

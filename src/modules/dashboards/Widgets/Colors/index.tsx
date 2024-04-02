import React, { useState } from 'react';
import ColorItem from './ColorItem';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';
import { ColorsListType } from '@crema/types/models/dashboards/Widgets';

type ColorsProps = {
  data: ColorsListType[];
};

const Colors: React.FC<ColorsProps> = ({ data }) => {
  const colors = data;

  const [colorsList, handleList] = useState(colors);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    color: ColorsListType,
  ) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item) =>
      item.id === color.id ? color : item,
    );
    handleList(list);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.colors'] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar
        sx={{
          height: { xs: 362, xl: 316 },
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return (
              <ColorItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Colors;

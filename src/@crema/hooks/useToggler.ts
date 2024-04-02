import React from "react";
export const useToggler = (initialState: any) => {
  const [value, setValue] = React.useState(initialState);

  const toggleValue = React.useCallback(
    () => setValue((prev: any) => !prev),
    [],
  );

  return [value, toggleValue];
};

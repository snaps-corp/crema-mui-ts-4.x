import React from "react";
export const useClickOutside = (
  ref: { current: { contains: (arg0: any) => any } },
  callback: () => void,
) => {
  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

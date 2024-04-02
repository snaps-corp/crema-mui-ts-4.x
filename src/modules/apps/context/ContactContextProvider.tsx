import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation } from 'react-router-dom';
import type {
  ContactType,
  FolderType,
  LabelType,
} from '@crema/types/models/apps/Contact';

export type ContactContextType = {
  labelList: LabelType[];
  folderList: FolderType[];
  contactList: ContactType;
  loading: boolean;
  page: number;
  pageView: string;
};

export type ContactActionContextType = {
  setContactData: (data: ContactType) => void;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number,
  ) => void;
  reCallAPI: () => void;
  setPageView: (data: string) => void;
  onChangePageView: (data: string) => void;
};

const ContextState: ContactContextType = {
  labelList: [],
  folderList: [],
  contactList: {} as ContactType,
  loading: false,
  page: 0,
  pageView: 'list',
};

const ContactContext = createContext<ContactContextType>(ContextState);
const ContactActionsContext = createContext<ContactActionContextType>({
  setContactData: (data: ContactType) => {},
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number,
  ) => {},
  reCallAPI: () => {},
  setPageView: (data: string) => {},
  onChangePageView: (data: string) => {},
});

export const useContactContext = () => useContext(ContactContext);

export const useContactActionsContext = () => useContext(ContactActionsContext);

type Props = {
  children: ReactNode;
};

export const ContactContextProvider = ({ children }: Props) => {
  const [{ apiData: labelList }] = useGetDataApi<LabelType[]>(
    '/api/contactApp/labels/list',
    [],
  );

  const [{ apiData: folderList }] = useGetDataApi<FolderType[]>(
    '/api/contactApp/folders/list',
    [],
  );

  const [pageView, setPageView] = useState('list');
  const { pathname } = useLocation();

  const [page, setPage] = useState(0);

  const [
    { apiData: contactList, loading },
    { setQueryParams, setData: setContactData, reCallAPI },
  ] = useGetDataApi<ContactType>(
    '/api/contactApp/contact/List',
    {} as ContactType,
    {},
    false,
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    setQueryParams({
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    });
  }, [pathname, page]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number,
  ) => {
    setPage(value);
  };

  const onChangePageView = (view: string) => {
    setPageView(view);
  };

  return (
    <ContactContext.Provider
      value={{
        labelList,
        folderList,
        contactList,
        loading,
        page,
        pageView,
      }}
    >
      <ContactActionsContext.Provider
        value={{
          setContactData,
          onPageChange,
          reCallAPI,
          setPageView,
          onChangePageView,
        }}
      >
        {children}
      </ContactActionsContext.Provider>
    </ContactContext.Provider>
  );
};
export default ContactContextProvider;

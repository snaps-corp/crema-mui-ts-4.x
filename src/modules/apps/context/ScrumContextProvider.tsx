import React, { createContext, ReactNode, useContext } from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import type {
  BoardType,
  LabelType,
  MemberType,
} from '@crema/types/models/apps/ScrumbBoard';

export type ScrumContextType = {
  boardList: BoardType[];
  labelList: LabelType[];
  memberList: MemberType[];
};

export type ScrumActionContextType = {
  setData: (data: BoardType[]) => void;
};

const ContextState: ScrumContextType = {
  boardList: [],
  labelList: [],
  memberList: [],
};

const ScrumContext = createContext<ScrumContextType>(ContextState);
const ScrumActionsContext = createContext<ScrumActionContextType>({
  setData: (data: BoardType[]) => {},
});

export const useScrumContext = () => useContext(ScrumContext);

export const useScrumActionsContext = () => useContext(ScrumActionsContext);

type Props = {
  children: ReactNode;
};

export const ScrumContextProvider = ({ children }: Props) => {
  const [{ apiData: boardList }, { setData }] = useGetDataApi<BoardType[]>(
    '/api/scrumboard/board/list',
    [],
  );

  const [{ apiData: labelList }] = useGetDataApi<LabelType[]>(
    '/api/scrumboard/label/list',
    [],
  );
  const [{ apiData: memberList }] = useGetDataApi<MemberType[]>(
    '/api/scrumboard/member/list',
    [],
  );

  return (
    <ScrumContext.Provider
      value={{
        boardList,
        labelList,
        memberList,
      }}
    >
      <ScrumActionsContext.Provider
        value={{
          setData,
        }}
      >
        {children}
      </ScrumActionsContext.Provider>
    </ScrumContext.Provider>
  );
};
export default ScrumContextProvider;

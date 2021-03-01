import { StateInterface, SidebarData } from '../types';
import { ReducerActionsTypes, ReducerAction } from './actionTypes';

const initialSidebarData: SidebarData = {
  statusName: '',
  activeModuleId: '',
  activeModulesGroup: {
    courseName: '',
    modules: [],
  },
};

export const initialState: StateInterface = {
  isLoading: true,
  previewData: [],
  modulesGroupsByStatus: new Map(),
  isSidebarOpen: false,
  sidebarData: initialSidebarData,
  searchValue: '',
};

export const reducer = (state: StateInterface, action: ReducerAction) => {
  switch (action.type) {
    case ReducerActionsTypes.previewDataRequest:
      return {
        ...state,
        isLoading: true,
      };
    case ReducerActionsTypes.previewDataSuccess:
      const { previewData } = action.payload;
      return {
        ...state,
        isLoading: false,
        previewData,
      };
    case ReducerActionsTypes.previewDataFailure:
      return {
        ...state,
        isLoading: false,
      };
    case ReducerActionsTypes.dataRequest:
      return {
        ...state,
        isLoading: true,
      };
    case ReducerActionsTypes.dataSuccess:
      const { modulesGroupsByStatus } = action.payload;
      return {
        ...state,
        isLoading: false,
        modulesGroupsByStatus,
      };
    case ReducerActionsTypes.dataFailure:
      return {
        ...state,
        isLoading: false,
      };
    case ReducerActionsTypes.setSidebarData:
      const { activeModuleId, activeModulesGroup, statusName } = action.payload.sidebarData;
      return {
        ...state,
        isSidebarOpen: true,
        sidebarData: {
          ...state.sidebarData,
          statusName,
          activeModuleId,
          activeModulesGroup,
        },
      };
    case ReducerActionsTypes.setActiveModule:
      const { id } = action.payload;
      return {
        ...state,
        sidebarData: {
          ...state.sidebarData,
          activeModuleId: id,
        },
      };
    case ReducerActionsTypes.closeSidebar:
      return {
        ...state,
        isSidebarOpen: false,
      };
    case ReducerActionsTypes.clearSidebarData:
      return {
        ...state,
        isSidebarOpen: false,
        sidebarData: initialSidebarData,
      };
    case ReducerActionsTypes.setSearchValue:
      const { searchValue } = action.payload;
      return {
        ...state,
        searchValue,
      };
    default:
      return state;
  }
};

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
};

export const reducer = (state: StateInterface, action: ReducerAction) => {
  switch (action.type) {
    case ReducerActionsTypes.previewDataRequest:
      return {
        ...state,
        isLoading: true,
      };
    case ReducerActionsTypes.previewDataSuccess:
      return {
        ...state,
        isLoading: false,
        previewData: action.payload.previewData,
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
      return {
        ...state,
        isLoading: false,
        modulesGroupsByStatus: action.payload.modulesGroupsByStatus,
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
    default:
      return state;
  }
};

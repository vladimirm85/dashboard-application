import { ReducerActionsTypes } from './actionTypes';
import { PreviewData, MapModulesGroupsByStatus, SidebarData } from '../types';

export interface PreviewDataRequest {
  type: ReducerActionsTypes.previewDataRequest;
}

export const previewDataRequest = (): PreviewDataRequest => ({
  type: ReducerActionsTypes.previewDataRequest,
});

export interface PreviewDataSuccess {
  type: ReducerActionsTypes.previewDataSuccess;
  payload: {
    previewData: PreviewData[];
  };
}

export const previewDataSuccess = (previewData: PreviewData[]): PreviewDataSuccess => ({
  type: ReducerActionsTypes.previewDataSuccess,
  payload: {
    previewData,
  },
});

export interface PreviewDataFailure {
  type: ReducerActionsTypes.previewDataFailure;
}

export const previewDataFailure = (): PreviewDataFailure => ({
  type: ReducerActionsTypes.previewDataFailure,
});

export interface DataRequest {
  type: ReducerActionsTypes.dataRequest;
}

export const dataRequest = (): DataRequest => ({
  type: ReducerActionsTypes.dataRequest,
});

export interface DataSuccess {
  type: ReducerActionsTypes.dataSuccess;
  payload: {
    modulesGroupsByStatus: MapModulesGroupsByStatus;
  };
}

export const dataSuccess = (modulesGroupsByStatus: MapModulesGroupsByStatus): DataSuccess => ({
  type: ReducerActionsTypes.dataSuccess,
  payload: {
    modulesGroupsByStatus,
  },
});

export interface DataFailure {
  type: ReducerActionsTypes.dataFailure;
}

export const dataFailure = (): DataFailure => ({
  type: ReducerActionsTypes.dataFailure,
});

export interface SetSidebarData {
  type: ReducerActionsTypes.setSidebarData;
  payload: {
    sidebarData: SidebarData;
  };
}

export const setSidebarData = (sidebarData: SidebarData): SetSidebarData => ({
  type: ReducerActionsTypes.setSidebarData,
  payload: {
    sidebarData,
  },
});

export interface CloseSidebar {
  type: ReducerActionsTypes.closeSidebar;
}

export const closeSidebar = (): CloseSidebar => ({
  type: ReducerActionsTypes.closeSidebar,
});

export interface ClearSidebarData {
  type: ReducerActionsTypes.clearSidebarData;
}

export const clearSidebarData = (): ClearSidebarData => ({
  type: ReducerActionsTypes.clearSidebarData,
});

export interface SetActiveModule {
  type: ReducerActionsTypes.setActiveModule;
  payload: {
    id: string;
  };
}

export const setActiveModule = (id: string): SetActiveModule => ({
  type: ReducerActionsTypes.setActiveModule,
  payload: {
    id,
  },
});

export interface SetSearchValue {
  type: ReducerActionsTypes.setSearchValue;
  payload: {
    searchValue: string;
  };
}

export const setSearchValue = (searchValue: string): SetSearchValue => ({
  type: ReducerActionsTypes.setSearchValue,
  payload: {
    searchValue,
  },
});

import {
  PreviewDataRequest,
  PreviewDataSuccess,
  PreviewDataFailure,
  DataRequest,
  DataSuccess,
  DataFailure,
  SetSidebarData,
  SetActiveModule,
  CloseSidebar,
  ClearSidebarData,
  SetSearchValue,
} from './actions';

export enum ReducerActionsTypes {
  previewDataRequest = 'PREVIEW_DATA_REQUEST',
  previewDataSuccess = 'PREVIEW_DATA_SUCCESS',
  previewDataFailure = 'PREVIEW_DATA_FAILURE',
  dataRequest = 'DATA_REQUEST',
  dataSuccess = 'DATA_SUCCESS',
  dataFailure = 'DATA_FAILURE',
  setSidebarData = 'SET_SIDEBAR_DATA',
  setActiveModule = 'SET_ACTIVE_MODULE',
  closeSidebar = 'CLOSE_SIDEBAR',
  clearSidebarData = 'CLEAR_SIDEBAR_DATA',
  setSearchValue = 'SET_SEARCH_VALUE',
}

export type ReducerAction =
  | PreviewDataRequest
  | PreviewDataSuccess
  | PreviewDataFailure
  | DataRequest
  | DataSuccess
  | DataFailure
  | SetSidebarData
  | SetActiveModule
  | CloseSidebar
  | SetSearchValue
  | ClearSidebarData;

import {
  PreviewDataRequest,
  PreviewDataSuccess,
  PreviewDataFailure,
  DataRequest,
  DataSuccess,
  DataFailure,
  SetSidebarData,
  CloseSidebar,
  ClearSidebarData,
} from './actions';

export enum ReducerActionsTypes {
  previewDataRequest = 'PREVIEW_DATA_REQUEST',
  previewDataSuccess = 'PREVIEW_DATA_SUCCESS',
  previewDataFailure = 'PREVIEW_DATA_FAILURE',
  dataRequest = 'DATA_REQUEST',
  dataSuccess = 'DATA_SUCCESS',
  dataFailure = 'DATA_FAILURE',
  setSidebarData = 'SET_SIDEBAR_DATA',
  closeSidebar = 'CLOSE_SIDEBAR',
  clearSidebarData = 'CLEAR_SIDEBAR_DATA',
}

export type ReducerAction =
  | PreviewDataRequest
  | PreviewDataSuccess
  | PreviewDataFailure
  | DataRequest
  | DataSuccess
  | DataFailure
  | SetSidebarData
  | CloseSidebar
  | ClearSidebarData;

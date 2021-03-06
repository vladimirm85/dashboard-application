import React, { useEffect, useReducer, Fragment } from 'react';
import { PageHeader, Input } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';
import { API } from './api';
import {
  reducer,
  initialState,
  previewDataRequest,
  previewDataSuccess,
  previewDataFailure,
  dataRequest,
  dataSuccess,
  dataFailure,
  setSidebarData,
  closeSidebar,
  setActiveModule,
  clearSidebarData,
  setSearchValue,
} from './reducer';
import { HeavyResponse, LightResponse, SidebarData } from './types';
import { getModulesGroupsByStatus } from './helpers';
import { Dashboard, Loader, Slider } from './components';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    previewData,
    modulesGroupsByStatus,
    isSidebarOpen,
    sidebarData,
    searchValue,
  } = state;

  useEffect(() => {
    dispatch(previewDataRequest());
    API.getLightData()
      .then(({ statuses }: LightResponse) => {
        dispatch(previewDataSuccess(statuses));
      })
      .catch(() => dispatch(previewDataFailure()));
  }, []);

  useEffect(() => {
    dispatch(dataRequest());
    API.getHeavyData()
      .then((coursesData: HeavyResponse) => {
        dispatch(dataSuccess(getModulesGroupsByStatus(coursesData)));
      })
      .catch(() => dispatch(dataFailure()));
  }, []);

  const setSidebarDataCb = (sidebarData: SidebarData) => dispatch(setSidebarData(sidebarData));
  const setActiveModuleCb = (id: string) => dispatch(setActiveModule(id));
  const closeSidebarCb = () => dispatch(closeSidebar());
  const clearSidebarDataCb = () => dispatch(clearSidebarData());
  const onSearch = (inputSearchValue: string) => {
    if (modulesGroupsByStatus.size) {
      dispatch(setSearchValue(inputSearchValue));
    }
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <PageHeader>
            <Input.Search
              allowClear
              placeholder="input search text"
              onSearch={onSearch}
              className="test"
            />
          </PageHeader>
          <div className="body-wrapper">
            <Dashboard
              searchValue={searchValue}
              modulesGroupsByStatus={modulesGroupsByStatus}
              previewData={previewData}
              sidebarData={sidebarData}
              setSidebarDataCb={setSidebarDataCb}
            />
            <Slider
              isSidebarOpen={isSidebarOpen}
              sidebarData={sidebarData}
              setActiveModuleCb={setActiveModuleCb}
              closeSidebarCb={closeSidebarCb}
              clearSidebarDataCb={clearSidebarDataCb}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

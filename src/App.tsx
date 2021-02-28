import React, { useEffect, useState, Fragment } from 'react';
import { PageHeader, Input } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';
import { API } from './api';
import {
  HeavyResponse,
  LightResponse,
  PreviewData as PreviewDataInterface,
  MapModulesGroupsByStatus,
  SidebarData,
} from './types';
import { getModulesGroupsByStatus } from './helpers';
import { Dashboard, Loader, Slider } from './components';

export const App = () => {
  const [previewData, setPreviewData] = useState<PreviewDataInterface[]>([]);
  const [modulesGroupsByStatus, setModulesGroupsByStatus] = useState<MapModulesGroupsByStatus>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarData, setSidebarData] = useState<SidebarData>();

  useEffect(() => {
    API.getHeavyData().then((coursesData: HeavyResponse) => {
      setModulesGroupsByStatus(getModulesGroupsByStatus(coursesData));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    API.getLightData().then(({ statuses }: LightResponse) => {
      setPreviewData(statuses);
      setIsLoading(false);
    });
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <PageHeader>
            <Input.Search placeholder="input search text" onSearch={() => {}} className="test" />
          </PageHeader>
          <div className="body-wrapper">
            <Dashboard modulesGroupsByStatus={modulesGroupsByStatus} previewData={previewData} />
            <Slider isSidebarOpen={isSidebarOpen} sidebarData={sidebarData} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

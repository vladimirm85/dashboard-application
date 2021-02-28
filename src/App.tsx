import React, { useEffect, useState, Fragment } from 'react';
import { Spin } from 'antd';
import './App.scss';
import { API } from './api';
import {
  HeavyResponse,
  LightResponse,
  PreviewData as PreviewDataInterface,
  MapModulesGroupsByStatus,
} from './types';
import { getModulesGroupsByStatus } from './helpers';
import { Dashboard, Loader } from './components';

export const App = () => {
  const [previewData, setPreviewData] = useState<PreviewDataInterface[]>([]);
  const [modulesGroupsByStatus, setModulesGroupsByStatus] = useState<MapModulesGroupsByStatus>();
  const [isLoading, setIsLoading] = useState(true);

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

  console.log('previewData', previewData);
  console.log('modulesGroupsByStatus', modulesGroupsByStatus);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Dashboard modulesGroupsByStatus={modulesGroupsByStatus} previewData={previewData} />
      )}
    </Fragment>
  );
};

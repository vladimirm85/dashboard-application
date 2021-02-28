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
            <div>Slider</div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

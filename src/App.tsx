import React, { useEffect, useState, Fragment} from 'react';
import './App.scss';
import { API } from './api';
import {
  HeavyResponse,
  LightResponse,
  PreviewData as PreviewDataInterface,
  MapModulesGroupsByStatus,
} from './types';
import {getModulesGroupsByStatus} from './helpers'
import {PreviewData, Dashboard} from './components'

export const App = () => {

  const [previewData, setPreviewData] = useState<PreviewDataInterface[]>([]);
  const [modulesGroupsByStatus, setModulesGroupsByStatus] = useState<MapModulesGroupsByStatus>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.getHeavyData().then((coursesData: HeavyResponse) => {
      setModulesGroupsByStatus(getModulesGroupsByStatus(coursesData));
      setIsLoading(false)
    });
  }, []);

  useEffect(() => {
    API.getLightData().then(({ statuses }: LightResponse) => {
      setPreviewData(statuses);
      setIsLoading(false)
    });
  }, []);

  console.log('previewData', previewData)
  console.log('modulesGroupsByStatus', modulesGroupsByStatus)

  return (
    <Fragment>
      {isLoading? <div>Loading...</div> : modulesGroupsByStatus? <Dashboard /> : <PreviewData />}
    </Fragment>
  )
}

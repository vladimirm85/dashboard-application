import React, { useEffect, useState} from 'react';
import './App.scss';
import { API } from './api';
import {
  HeavyResponse,
  LightResponse,
  PreviewData,
  MapModulesGroupsByStatus,
  CoursesData
} from './types';

export const getModulesData = ({ courses, statuses }: CoursesData): MapModulesGroupsByStatus => {
  const modulesGroupsData: MapModulesGroupsByStatus = new Map();

  statuses.forEach((statusData) => modulesGroupsData.set(statusData.name, []));

  courses.forEach((course) => {
    statuses.forEach((modulesStatus) => {
      const modules = course.modules.filter((module) => module.status.name === modulesStatus.name);
      if (modules.length) {
        modulesGroupsData.get(modulesStatus.name)?.push({
          courseName: course.name,
          modules,
        });
      }
    });
  });

  return modulesGroupsData;
};

export const App = () => {

  const [previewData, setPreviewData] = useState<PreviewData[]>([]);
  const [modulesGroupsByStatus, setModulesGroupsByStatus] = useState<MapModulesGroupsByStatus>();

  useEffect(() => {
    API.getHeavyData().then((coursesData: HeavyResponse) => {
      setModulesGroupsByStatus(getModulesData(coursesData));
    });
  }, []);

  useEffect(() => {
    API.getLightData().then(({ statuses }: LightResponse) => {
      setPreviewData(statuses);
    });
  }, []);

  console.log('previewData', previewData)
  console.log('modulesGroupsByStatus', modulesGroupsByStatus)

  return (
  <div>Hello world</div>
  )
}

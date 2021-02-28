import { MouseEvent } from 'react';
import { MapModulesGroupsByStatus, SidebarData } from '../types';
import { setSidebarData } from './';

export const setModulesGroupActive = (
  { currentTarget }: MouseEvent<HTMLDivElement>,
  modulesGroups: MapModulesGroupsByStatus,
  setSidebarDataCb: (sidebarData: SidebarData) => void
) => {
  const courseName = currentTarget.getAttribute('id');
  if (courseName) {
    setSidebarData(currentTarget, courseName, modulesGroups, setSidebarDataCb);
  }
};

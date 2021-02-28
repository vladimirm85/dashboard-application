import { MouseEvent } from 'react';
import { MapModulesGroupsByStatus, SidebarData } from '../types';
import { setSidebarData } from './';

export const setModuleActive = (
  e: MouseEvent<HTMLDivElement>,
  modulesGroups: MapModulesGroupsByStatus,
  setSidebarDataCb: (sidebarData: SidebarData) => void
) => {
  e.stopPropagation();
  const { currentTarget } = e;
  const id = currentTarget.getAttribute('id');
  if (id) {
    const card = currentTarget.closest('.ant-card');
    if (card) {
      const courseName = card.getAttribute('id');
      if (courseName) {
        setSidebarData(currentTarget, courseName, modulesGroups, setSidebarDataCb, id);
      }
    }
  }
};

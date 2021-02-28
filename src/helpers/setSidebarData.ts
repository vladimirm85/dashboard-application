import { MapModulesGroupsByStatus, SidebarData } from '../types';

export const setSidebarData = (
  currentTarget: EventTarget & HTMLDivElement,
  courseName: string,
  modulesGroups: MapModulesGroupsByStatus,
  setSidebarDataCb: (sidebarData: SidebarData) => void,
  id: string = ''
) => {
  const cardsContainer = currentTarget.closest('.cards-container');
  if (cardsContainer) {
    const statusName = cardsContainer.getAttribute('id');
    if (statusName) {
      const modulesGroupsByStatus =
        statusName &&
        modulesGroups
          ?.get(statusName)
          ?.find((modulesGroupsByStatus) => modulesGroupsByStatus.courseName === courseName);
      if (modulesGroupsByStatus) {
        setSidebarDataCb({
          statusName,
          activeModulesGroup: modulesGroupsByStatus,
          activeModuleId: id,
        });
      }
    }
  }
};

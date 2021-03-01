import { MapModulesGroupsByStatus, PreviewData } from '../types';

export const getModulesData = (modulesGroupsByStatus: MapModulesGroupsByStatus): PreviewData[] => {
  const modulesData: PreviewData[] = [];
  for (let [statusName, modulesGroupByStatus] of modulesGroupsByStatus) {
    modulesData.push({
      status: {
        name: statusName,
        id: modulesGroupByStatus[0].modules[0].status.id,
      },
      amount: modulesGroupByStatus.length,
    });
  }
  return modulesData;
};

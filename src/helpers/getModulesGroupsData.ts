import { MapModulesGroupsByStatus } from '../types';

export const getModulesGroupsData = (
  modulesGroupsByStatus: MapModulesGroupsByStatus,
  searchValue: string
) => {
  const modulesData: MapModulesGroupsByStatus = new Map();
  const searchValueLc = searchValue.toLowerCase();

  for (let [statusName, modulesGroupByStatus] of modulesGroupsByStatus) {
    modulesGroupByStatus.forEach(({ courseName, modules }) => {
      const courseNameLc = courseName.toLowerCase();
      let isIncludes = false;
      if (courseNameLc.includes(searchValueLc)) {
        isIncludes = true;
      } else {
        isIncludes = modules.some(({ name }) => name.includes(searchValueLc));
      }
      if (isIncludes) {
        if (!modulesData.get(statusName)) {
          modulesData.set(statusName, []);
        }
        modulesData.get(statusName)?.push({
          courseName,
          modules: [...modules],
        });
      }
    });
  }

  return modulesData;
};

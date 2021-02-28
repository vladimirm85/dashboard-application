import {CoursesData, MapModulesGroupsByStatus} from '../types';

export const getModulesGroupsByStatus = ({ courses, statuses }: CoursesData): MapModulesGroupsByStatus => {
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

export interface Module {
  id: string;
  name: string;
  status: Status;
}

export interface Course {
  id: string;
  name: string;
  modules: Module[];
}

export interface Status {
  id: string;
  name: string;
}

export interface HeavyResponse {
  courses: Course[];
  statuses: Status[];
}

export interface PreviewData {
  status: Status;
  amount: number;
}

export interface LightResponse {
  statuses: PreviewData[];
}

export interface ModulesGroupByStatus {
  courseName: string;
  modules: Module[];
}

export type MapModulesGroupsByStatus = Map<string, ModulesGroupByStatus[]>;

export interface CoursesData {
  courses: Course[];
  statuses: Status[];
}

export interface SidebarData {
  activeModulesGroup: ModulesGroupByStatus;
  activeModuleId: string;
}

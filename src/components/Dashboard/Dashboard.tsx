import { MapModulesGroupsByStatus, PreviewData as previewDataInterface } from '../../types';

interface PropsType {
  modulesGroupsByStatus?: MapModulesGroupsByStatus;
  previewData: previewDataInterface[];
}

export const Dashboard = ({ modulesGroupsByStatus, previewData }: PropsType) => (
  <div>Dashboard</div>
);

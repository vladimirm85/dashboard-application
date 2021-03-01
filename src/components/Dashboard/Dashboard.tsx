import { getCards, getModulesGroupsData, getModulesData } from '../../helpers';
import 'antd/dist/antd.css';
import './Dashboard.scss';
import {
  MapModulesGroupsByStatus,
  PreviewData as previewDataInterface,
  SidebarData,
} from '../../types';

interface PropsType {
  modulesGroupsByStatus?: MapModulesGroupsByStatus;
  previewData: previewDataInterface[];
  setSidebarDataCb: (sidebarData: SidebarData) => void;
  sidebarData: SidebarData;
  searchValue: string;
}

export const Dashboard = ({
  modulesGroupsByStatus,
  previewData,
  setSidebarDataCb,
  sidebarData,
  searchValue,
}: PropsType) => {
  let modulesGroupsData = modulesGroupsByStatus;
  let modulesData = previewData;

  if (modulesGroupsByStatus?.size) {
    modulesGroupsData = getModulesGroupsData(modulesGroupsByStatus, searchValue);
    modulesData = getModulesData(modulesGroupsData);
  }

  const dashboardData = modulesData.map((data, index) => {
    const cards = getCards(data, modulesGroupsData, sidebarData, setSidebarDataCb);
    return (
      <div key={`pd${index}`} id={data.status.name} className="cards-container">
        <h3>{data.status.name}</h3>
        <div className="cards-row">{cards.map((card) => card)}</div>
      </div>
    );
  });

  return <div className="dashboard-wrapper">{dashboardData}</div>;
};

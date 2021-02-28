import { getCards } from '../../helpers';
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
}

export const Dashboard = ({
  modulesGroupsByStatus,
  previewData,
  setSidebarDataCb,
  sidebarData,
}: PropsType) => {
  const dashboardData = previewData.map((data, index) => {
    const cards = getCards(data, modulesGroupsByStatus, sidebarData, setSidebarDataCb);
    return (
      <div key={`pd${index}`} id={data.status.name} className="cards-container">
        <h3>{data.status.name}</h3>
        <div className="cards-row">{cards.map((card) => card)}</div>
      </div>
    );
  });

  return <div className="dashboard-wrapper">{dashboardData}</div>;
};

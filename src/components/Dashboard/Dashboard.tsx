import { Card, Skeleton } from 'antd';
import { getCards } from '../../helpers';
import 'antd/dist/antd.css';
import './Dashboard.scss';
import { MapModulesGroupsByStatus, PreviewData as previewDataInterface } from '../../types';

interface PropsType {
  modulesGroupsByStatus?: MapModulesGroupsByStatus;
  previewData: previewDataInterface[];
}

export const Dashboard = ({ modulesGroupsByStatus, previewData }: PropsType) => {
  const dashboardData = previewData.map((data, index) => {
    const cards = getCards(data, modulesGroupsByStatus);
    return (
      <div key={`pd${index}`} className="cards-container">
        <h3>{data.status.name}</h3>
        <div className="cards-row">{cards.map((card) => card)}</div>
      </div>
    );
  });

  return <div className="dashboard-wrapper">{dashboardData}</div>;
};

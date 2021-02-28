import { Card, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { MapModulesGroupsByStatus, PreviewData as previewDataInterface } from '../../types';

interface PropsType {
  modulesGroupsByStatus?: MapModulesGroupsByStatus;
  previewData: previewDataInterface[];
}

export const getCards = (
  previewData: previewDataInterface,
  modulesGroups: MapModulesGroupsByStatus = new Map()
) => {
  const cards = [];
  for (let i = 0; i < previewData.amount; i++) {
    const modulesGroupByStatusArray = modulesGroups?.get(previewData.status.name);
    const modulesGroupByStatus = modulesGroupByStatusArray && modulesGroupByStatusArray[i];
    cards.push(
      <Card key={`card${i}`} id={previewData.status.name}>
        <Skeleton loading={!modulesGroups.size} avatar active paragraph={{ rows: 4 }}>
          <Card.Meta avatar title={modulesGroupByStatus?.courseName} />
          {modulesGroupByStatus?.modules.map((module) => (
            <div key={module.id} id={module.id}>
              {module.name}
            </div>
          ))}
        </Skeleton>
      </Card>
    );
  }
  return cards;
};

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

  return <div>{dashboardData}</div>;
};

import { MapModulesGroupsByStatus, PreviewData as previewDataInterface } from '../types';
import { Card, Skeleton } from 'antd';

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

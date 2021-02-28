import {
  MapModulesGroupsByStatus,
  PreviewData as previewDataInterface,
  SidebarData,
} from '../types';
import { Card, Skeleton } from 'antd';
import { setModuleActive, setModulesGroupActive } from './';

export const getCards = (
  previewData: previewDataInterface,
  modulesGroups: MapModulesGroupsByStatus = new Map(),
  sidebarData: SidebarData,
  setSidebarDataCb: (sidebarData: SidebarData) => void
) => {
  const cards = [];
  for (let i = 0; i < previewData.amount; i++) {
    const modulesGroupByStatusArray = modulesGroups?.get(previewData.status.name);
    const modulesGroupByStatus = modulesGroupByStatusArray && modulesGroupByStatusArray[i];
    const getCardId = () => (modulesGroups.size ? modulesGroupByStatus?.courseName : '');
    const getCardActiveClass = () => {
      if (
        modulesGroups.size &&
        !sidebarData.activeModuleId &&
        previewData.status.name === sidebarData.statusName &&
        sidebarData.activeModulesGroup.courseName === modulesGroupByStatus?.courseName
      ) {
        return 'active';
      }
      return '';
    };

    cards.push(
      <Card
        key={`card${i}`}
        id={getCardId()}
        className={getCardActiveClass()}
        onClick={(e) => setModulesGroupActive(e, modulesGroups, setSidebarDataCb)}
      >
        <Skeleton loading={!modulesGroups.size} avatar active paragraph={{ rows: 4 }}>
          <Card.Meta avatar title={modulesGroupByStatus?.courseName} />
          {modulesGroupByStatus?.modules.map((module) => (
            <div
              key={module.id}
              id={module.id}
              className={`module ${sidebarData.activeModuleId === module.id ? 'active' : ''}`}
              onClick={(e) => setModuleActive(e, modulesGroups, setSidebarDataCb)}
            >
              {module.name}
            </div>
          ))}
        </Skeleton>
      </Card>
    );
  }
  return cards;
};

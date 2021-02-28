import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './Slider.scss';
import { SidebarData } from '../../types';

interface PropsType {
  isSidebarOpen: boolean;
  sidebarData?: SidebarData;
  closeSidebarCb: () => void;
}

export const Slider = ({ isSidebarOpen, sidebarData, closeSidebarCb }: PropsType) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-active' : ''}`}>
      <Button
        className="sidebar--close-button"
        onClick={closeSidebarCb}
        shape="circle"
        icon={<CloseOutlined />}
      />
      <h3 className="heading">Course</h3>
      <h3 className="row row-course">{sidebarData?.activeModulesGroup.courseName}</h3>
      {sidebarData?.activeModulesGroup.modules.map((module) => (
        <div
          className={`row row-module ${module.id === sidebarData?.activeModuleId ? 'active' : ''}`}
          key={module.id}
        >
          <p className="row-module-name">{module.name}</p>
          <p className="row-module-status">{module.status.name}</p>
        </div>
      ))}
    </div>
  );
};

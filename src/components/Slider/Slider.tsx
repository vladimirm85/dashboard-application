import './Slider.scss';
import { SidebarData } from '../../types';

interface PropsType {
  isSidebarOpen: boolean;
  sidebarData?: SidebarData;
}

export const Slider = ({ isSidebarOpen, sidebarData }: PropsType) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-active' : ''}`}>
      <h3>Course</h3>
      <h3>{sidebarData?.activeModulesGroup.courseName}</h3>
      <div>
        {sidebarData?.activeModulesGroup.modules.map((module) => (
          <div key={module.id}>
            <p>{module.name}</p>
            <p>{module.status.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

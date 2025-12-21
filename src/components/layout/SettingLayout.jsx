import { Outlet } from "react-router-dom";
import SettingNavigation from "./SettingNavigaton";
const SettingLayout = () => {
  return (
    <>
      <SettingNavigation />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SettingLayout;

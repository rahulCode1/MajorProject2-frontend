import { NavLink } from "react-router-dom";
const SettingNavigation = () => {
  return (
    <>
      <div className="d-flex align-items-center py-3 px-4 justify-content-between bg-white shadow-sm">
        <h1 className="h4 mb-0 fw-semibold">Settings</h1>
        <ul className="nav gap-2">
          <li className="nav-item">
            <NavLink
              to="/setting/leads"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded fw-medium ${
                  isActive ? "bg-primary text-white" : "bg-light text-dark"
                }`
              }
            >
              Manage Leads
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/setting/agents"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded fw-medium ${
                  isActive ? "bg-primary text-white" : "bg-light text-dark"
                }`
              }
            >
              Manage Sales Agents
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingNavigation;

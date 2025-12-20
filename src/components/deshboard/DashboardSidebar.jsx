import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="col-md-3">
      <div className="d-flex flex-column gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
          }
        >
          Leads 
        </NavLink>
        <NavLink
          to="/addLeads"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
          }
        >
          Add Leads
        </NavLink>
        <NavLink
          to="/salesAgent"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
          }
          end
        >
          Sales Agent
        </NavLink>
        <NavLink
          to="/salesAgent/add"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-primary" : "btn-outline-primary"}`
          }
        >
          Add Sales Agent
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;

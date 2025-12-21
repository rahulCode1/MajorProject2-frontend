import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <aside
      className="bg-dark border-end border-secondary shadow-lg flex-shrink-0 d-flex flex-column"
      style={{
        width: "240px",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="p-3 border-bottom border-secondary">
        <h5 className="text-white mb-0 fw-semibold">Anvaya</h5>
      </div>

      <nav className="flex-grow-1 p-3">
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive
                    ? "bg-secondary text-white"
                    : "text-light hover-bg-secondary"
                }`
              }
              style={({ isActive }) => ({
                transition: "all 0.2s ease",
                backgroundColor: isActive ? "" : "transparent",
              })}
              end
            >
              <i className="bi bi-house-door me-2"></i>
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              end
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-people me-2"></i>
              Leads
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/leads/addLeads"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-person-plus me-2"></i>
              Add Leads
            </NavLink>
          </li>

          <li className="nav-item mt-3">
            <div className="text-muted small text-uppercase px-3 mb-2">
              Sales Team
            </div>
          </li>

          <li className="nav-item">
            <NavLink
              to="/salesAgent"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
              end
            >
              <i className="bi bi-person-badge me-2"></i>
              Sales Agents
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/salesAgent/add"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-person-plus-fill me-2"></i>
              Add Sales Agent
            </NavLink>
          </li>

          <li className="nav-item mt-3">
            <div className="text-muted small text-uppercase px-3 mb-2">
              Analytics
            </div>
          </li>

          <li className="nav-item">
            <NavLink
              to="/report"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-bar-chart me-2"></i>
              Reports
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/leads/newLeads"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-star me-2"></i>
              Leads Via Status
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/leads/leadByAgents"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-diagram-3 me-2"></i>
              Leads by Agent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                `nav-link rounded ${
                  isActive ? "bg-secondary text-white" : "text-light"
                }`
              }
              style={{ transition: "all 0.2s ease" }}
            >
              <i className="bi bi-diagram-3 me-2"></i>
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MainNavigation;

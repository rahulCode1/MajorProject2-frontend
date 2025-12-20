
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "react-toastify/dist/ReactToastify.css";
import "./utils/chartSetup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LeadForm from './pages/LeadForm';
import RootLayout from './components/RootLayout';
import { LeadProvider } from './context/LeadContext';
import ErrorPage from './pages/ErrorPage';
import AddNewAgent, { actions as salesAgentAction } from './pages/AddNewAgent';
import SalesAgent from './pages/SalesAgents';
import DashboardScreen from './pages/DashboardScreen';
import LeadManagementPage, { loader as leadManagementLoader } from './pages/LeadManagementPage';
import LeadsList from './pages/LeadsList';
import ReportPage from './pages/ReportPage';
import LeadStatusViewPage from './pages/LeadStatusViewPage';
import EditLeadPage from './pages/EditLeadPage';
import LeadsBySalesAgent from './pages/LeadsBySalesAgent';

const router = createBrowserRouter([
  {
    path: "", element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardScreen /> },
      {
        path: "leads", children: [
          { index: true, element: <LeadsList /> },
          {
            path: ":id",
            loader: leadManagementLoader,
            id: "leadId",
            children: [

              { index: true, element: <LeadManagementPage />, loader: leadManagementLoader },
              { path: "edit", element: <EditLeadPage /> },
            ]
          },
          { path: "addLeads", element: <LeadForm /> },
          { path: "newLeads", element: <LeadStatusViewPage /> },
          { path: "leadByAgents", element: <LeadsBySalesAgent /> }
        ]
      },
      {
        path: "salesAgent", children: [
          { index: true, element: <SalesAgent /> },
          { path: "add", element: <AddNewAgent />, action: salesAgentAction }
        ]
      },
      { path: "report", element: <ReportPage /> }
    ]
  }
])

function App() {
  return (
    <LeadProvider>

      <RouterProvider router={router} />
    </LeadProvider>
  );
}

export default App;

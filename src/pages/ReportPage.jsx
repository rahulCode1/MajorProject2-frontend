import { Link , useRouteLoaderData} from "react-router-dom";
import useLeadContext from "../context/LeadContext";
import TotalLeadsClosed from "../components/report/TotalLeadsClosed";
import LeadsClosedByAgent from "../components/report/LeadsClosedByAgent";
import ReportViaStatus from "../components/report/ReportViaStatus";

const ReportPage = () => {
  const {  leadsNotOrInPipeline, leadsClosedByAgent } =
    useLeadContext();
  const allLeads = useRouteLoaderData("allLeads")

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container py-4 d-flex justify-content-between align-items-center px-3">
          <h1 className="h2 mb-0 fw-bold">Report Overview </h1>
          <Link
            to={"/"}
            className="text-decoration-none  mb-2 d-inline-block  btn btn-secondary"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
      <TotalLeadsClosed leadsNotOrInPipeline={leadsNotOrInPipeline} />
      <LeadsClosedByAgent leads={leadsClosedByAgent} />
      <ReportViaStatus allLeads={allLeads} />
    </>
  );
};

export default ReportPage;

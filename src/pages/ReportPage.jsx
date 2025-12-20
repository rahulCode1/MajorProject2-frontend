import useLeadContext from "../context/LeadContext";
import TotalLeadsClosed from "../components/report/TotalLeadsClosed";
import LeadsClosedByAgent from "../components/report/LeadsClosedByAgent";
import LastWeekClosedLeads from "../components/report/LastWeekClosedLeads";

const ReportPage = () => {
  const { lastWeekClosedLeads, leadsNotOrInPipeline, leadsClosedByAgent } =
    useLeadContext();



  return (
    <>
      <TotalLeadsClosed leadsNotOrInPipeline={leadsNotOrInPipeline} />
      <LeadsClosedByAgent leads={leadsClosedByAgent} />
      <LastWeekClosedLeads leads={lastWeekClosedLeads} />
    </>
  );
};

export default ReportPage;

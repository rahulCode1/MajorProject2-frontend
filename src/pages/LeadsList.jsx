import { useRouteLoaderData } from "react-router-dom";
import useLeadContext from "../context/LeadContext";
import LeadsListItem from "../components/leads/LeadsListItem";

const LeadsList = () => {
    const allLeads = useRouteLoaderData("allLeads")

  return (
    <>
    
      <LeadsListItem leads={allLeads} />
    </>
  );
};

export default LeadsList;

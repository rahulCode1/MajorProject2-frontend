import useLeadContext from "../context/LeadContext";
import LeadsListItem from "../components/leads/LeadsListItem";

const LeadsList = () => {
  const { allLeads } = useLeadContext();

  return (
    <>
    
      <LeadsListItem leads={allLeads} />
    </>
  );
};

export default LeadsList;

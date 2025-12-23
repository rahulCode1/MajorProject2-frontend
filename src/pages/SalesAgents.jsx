import SalesAgentsCard from "../components/SalesAgentCard";
import useLeadContext from "../context/LeadContext";
const SalesAgent = () => {
   const { salesAgent, isLoading } = useLeadContext();
  return (
    <>
      <SalesAgentsCard salesAgent={salesAgent} isLoading={isLoading}/>
    </>
  );
};

export default SalesAgent;

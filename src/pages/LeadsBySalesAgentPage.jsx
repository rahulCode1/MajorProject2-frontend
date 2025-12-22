import { Await, useRouteLoaderData } from "react-router-dom";
import LeadsBySalesAgent from "../components/leads/LeadBySalesAgent";
import { Suspense } from "react";
import Loading from "../components/Loading";

const LeadsBySalesAgentPage = () => {
  const { leads } = useRouteLoaderData("allLeads");

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={leads}>
        {(isLeadLoad) => <LeadsBySalesAgent allLeads={isLeadLoad} />}
      </Await>
    </Suspense>
  );
};

export default LeadsBySalesAgentPage;

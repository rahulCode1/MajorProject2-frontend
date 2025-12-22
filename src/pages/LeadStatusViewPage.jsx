import { useRouteLoaderData, Await } from "react-router-dom";

import LeadStatus from "../components/leads/LeadStatus";
import { Suspense } from "react";
import Loading from "../components/Loading";

const LeadStatusViewPage = () => {
  const { leads } = useRouteLoaderData("allLeads");
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={leads}>
        {(isLeadLoad) => <LeadStatus allLeads={isLeadLoad} />}
      </Await>
    </Suspense>
  );
};

export default LeadStatusViewPage;

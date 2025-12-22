import { useRouteLoaderData, Await } from "react-router-dom";
import LeadsListItem from "../components/leads/LeadsListItem";
import { Suspense } from "react";
import Loading from "../components/Loading";

const LeadsList = () => {
  const { leads } = useRouteLoaderData("allLeads");

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={leads}>
        {(isLoadingData) => <LeadsListItem leads={isLoadingData} />}
      </Await>
    </Suspense>
  );
};

export default LeadsList;

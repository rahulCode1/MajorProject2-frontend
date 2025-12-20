import { useSearchParams } from "react-router-dom";

import useLeadContext from "../context/LeadContext";
const LeadsBySalesAgent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { allLeads, salesAgent } = useLeadContext();

  const salesAgentId = searchParams.get("agentId");
  let filterLeads =
    salesAgentId === null
      ? allLeads
      : allLeads.filter((lead) => lead.salesAgent === salesAgentId);

  filterLeads =
    searchParams.get("status") === null
      ? filterLeads
      : filterLeads.filter(
          (lead) => lead.status === searchParams.get("status")
        );

  filterLeads =
    searchParams.get("priority") === null
      ? filterLeads
      : filterLeads.filter(
          (lead) => lead.priority === searchParams.get("priority")
        );

  const onUpdateParams = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (!key) {
      params.delete(value);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };

  const leadsStatusArr = [
    { name: "New", value: "New" },
    { name: "Contacted", value: "Contacted" },
    { name: "Qualified", value: "Qualified" },
    { name: "Proposal Sent", value: "Proposal Sent" },
    { name: "Closed", value: "Closed" },
  ];

  const priorityArr = ["High", "Medium", "Low"];

  const sortViaCloseTime = [...filterLeads];

  if (searchParams.get("time") === "closeSoon") {
    sortViaCloseTime.sort((a, b) => a.timeToClose - b.timeToClose);
  }

  if (searchParams.get("time") === "takeLonger") {
    sortViaCloseTime.sort((a, b) => b.timeToClose - a.timeToClose);
  }

  return (
    <>
      <div className="container my-4">
        <div className="mb-4">
          <label className="form-label fw-semibold">Sales Agent: </label>
          <select
            id="agentId"
            className="form-select"
            onChange={(e) => onUpdateParams("agentId", e.target.value)}
          >
            <option disabled selected>
              All Leads
            </option>
            {salesAgent &&
              salesAgent.map((agent) => (
                <option value={agent.id} id={"agentId"} key={agent.id}>
                  Leads by {agent.name}
                </option>
              ))}
          </select>
        </div>

        <div className="row g-3">
          {sortViaCloseTime && sortViaCloseTime.length !== 0 ? (
            sortViaCloseTime.map((lead) => (
              <div className="col-12 col-md-6 col-lg-4" key={lead.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      {lead.name}{" "}
                      <span className="badge bg-primary">{lead.status}</span>
                    </h5>
                    <p className="card-text mb-2">
                      <strong>Status:</strong> {lead.status}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Priority:</strong> {lead.priority}
                    </p>
                    <p className="card-text mb-0">
                      <strong>Closed At:</strong> {lead.timeToClose}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info" role="alert">
                No lead found with this agent.
              </div>
            </div>
          )}
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <h6 className="card-title mb-3">Filters:</h6>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  onChange={(e) => onUpdateParams("status", e.target.value)}
                >
                  <option selected value={""} disabled>
                    All Leads
                  </option>
                  {leadsStatusArr.map((lead) => (
                    <option value={lead.value} key={lead.value}>
                      {lead.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label">Priority</label>
                <select
                  className="form-select"
                  onChange={(e) => onUpdateParams("priority", e.target.value)}
                >
                  <option disabled selected value={""}>
                    Select Priority
                  </option>
                  {priorityArr.map((priority) => (
                    <option value={priority} key={priority}>
                      {priority}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label d-block">Time to Close</label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="timeToClose"
                    value={"closeSoon"}
                    onChange={(e) => onUpdateParams("time", e.target.value)}
                    className="form-check-input"
                    id="closeSoon"
                  />
                  <label className="form-check-label" htmlFor="closeSoon">
                    Close Soon
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="timeToClose"
                    value={"takeLonger"}
                    onChange={(e) => onUpdateParams("time", e.target.value)}
                    className="form-check-input"
                    id="takeLonger"
                  />
                  <label className="form-check-label" htmlFor="takeLonger">
                    Take Longer
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadsBySalesAgent;

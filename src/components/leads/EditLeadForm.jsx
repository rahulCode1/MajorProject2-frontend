import { useRouteLoaderData, Form, useNavigation } from "react-router-dom";
import SubmitLoadingSpinner from "../../components/SubmitLoadingSpinnr";

import useLeadContext from "../../context/LeadContext";

const EditLeadForm = () => {
  const { salesAgent } = useLeadContext();

  const { lead } = useRouteLoaderData("leadId");
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <Form method="post" className="container py-4">
      {/* Lead Name */}
      <div className="mb-3">
        <label className="form-label">Lead Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          defaultValue={lead && lead.name}
          required
        />
      </div>

      {/* Source & Closed At */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Lead Source</label>
            <select
              id="source"
              name="source"
              className="form-select"
              defaultValue={lead && lead.source}

              // required
            >
              <option value="" disabled>
                Select Lead Source
              </option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label" htmlFor="closedAt">
              Closed At
            </label>
            <input
              type="date"
              id="closedAt"
              name="closedAt"
              className="form-control"
              defaultValue={lead && lead.closedAt.split("T")[0]}

              // required
            />
          </div>
        </div>
      </div>

      {/* Status & Sales Agent */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Lead Status</label>
            <select
              id="status"
              name="status"
              className="form-select"
              defaultValue={lead && lead.status}

              // required
            >
              <option value="" disabled>
                Lead Status
              </option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label">Assigned Sales Agent</label>
            <select
              id="salesAgent"
              name="salesAgent"
              className="form-select"
              defaultValue={lead && lead.salesAgent._id}

              // required
            >
              {salesAgent.map((agent) => (
                <option value={agent.id} id="salesAgent">
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Time to Close & Priority */}
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Time to Close (days)</label>
            <input
              type="number"
              id="timeToClose"
              name="timeToClose"
              className="form-control"
              defaultValue={lead && lead.timeToClose}

              // required
            />
          </div>
        </div>

        <div className="col">
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              id="priority"
              name="priority"
              className="form-select"
              defaultValue={lead && lead.priority}

              // required
            >
              <option value="" disabled>
                Priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-3">
        <label className="form-label" htmlFor="tags">
          Tags
        </label>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="High Value"
            name="tags"
            defaultChecked={lead && lead.tags.includes("High Value")}
          />
          <label className="form-check-label">High Value</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="Follow-up"
            name="tags"
            defaultChecked={lead && lead.tags.includes("Follow-up")}
          />
          <label className="form-check-label">Follow-up</label>
        </div>
      </div>

      <button disabled={isLoading} type="submit" className="btn btn-primary">
        {isLoading && <SubmitLoadingSpinner />}
        {isLoading ? "Update..." : "Update Lead"}
      </button>
    </Form>
  );
};

export default EditLeadForm;

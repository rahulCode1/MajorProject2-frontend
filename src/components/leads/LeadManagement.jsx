import { Link } from "react-router-dom";
import CommentPage from "../../pages/CommentPage";

const LeadManagement = ({ lead, comments }) => {
  // console.log(lead);
  return (
    <>
      <div className="row py-3">
        <div className="col-md-3">
          <Link to="/" className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
        <div className="col-md-9">
          <h3>Lead Name: {lead.name}</h3>
          <h3>Sales Agent : {lead.salesAgent.name}</h3>
          <h3>Lead Source : {lead.source}</h3>
          <h3>Lead Status : {lead.status}</h3>
          <h3>Priority : {lead.priority}</h3>
          <h3>Time to Close : {lead.timeToClose}</h3>
          <hr />
          <Link to={`edit`} className="btn btn-secondary">
            Edit Lead Details{" "}
          </Link>

          <div>
            <h2>Comment Section </h2>
            {comments && comments.length !== 0 ? (
              comments.map((comment) => (
                <div>
                  <h2>{comment.author}: </h2>
                  <p>Comment: {comment.commentText}</p>
                </div>
              ))
            ) : (
              <p>This lead doesn't have any comments. </p>
            )}
          </div>

          <div>
            <CommentPage
              author={lead.salesAgent.name}
              leadId={lead.id}
              salesAgentId={lead.salesAgent._id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadManagement;

import { Link } from "react-router-dom";
import CommentPage from "../../pages/CommentPage";

const LeadManagement = ({ lead, comments }) => {



  return (
    <>
      <div className="min-vh-100 bg-light">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-bottom">
          <div className="container py-3 d-flex justify-content-between px-4">
            <h2>Lead details </h2>
            <Link to="/" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="container my-4">
          <div className="row g-4">
            {/* Lead Details Card */}
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Lead Name</p>
                      <h5 className="fw-bold mb-0">{lead.name}</h5>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Sales Agent</p>
                      <h5 className="fw-bold mb-0">{lead.salesAgent.name}</h5>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Lead Source</p>
                      <h5 className="fw-bold mb-0">{lead.source}</h5>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Lead Status</p>
                      <h5 className="mb-0">
                        <span className="badge bg-primary rounded-pill">
                          {lead.status}
                        </span>
                      </h5>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Priority</p>
                      <h5 className="fw-bold mb-0">{lead.priority}</h5>
                    </div>
                    <div className="col-12 col-md-6">
                      <p className="text-muted small mb-1">Time to Close</p>
                      <h5 className="fw-bold mb-0">{lead.timeToClose}</h5>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <Link to={`edit`} className="btn btn-secondary">
                    <i className="bi bi-pencil me-2"></i>Edit Lead Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-chat-dots me-2"></i>Comments
                  </h5>
                  <span className="badge bg-secondary rounded-pill">
                    {comments ? comments.length : 0}
                  </span>
                </div>
                <div className="card-body">
                  {comments && comments.length !== 0 ? (
                    <div className="comments-list">
                      {comments.map((comment, index) => (
                        <div
                          key={index}
                          className="comment-item p-3 mb-3 bg-light rounded border"
                        >
                          <div className="d-flex align-items-start">
                            <div
                              className="avatar-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                              style={{
                                width: "40px",
                                height: "40px",
                                minWidth: "40px",
                              }}
                            >
                              {comment.author.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="fw-bold mb-1">{comment.author.name}</h6>
                              <p className="text-muted mb-0">
                                {comment.commentText}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5">
                      <i
                        className="bi bi-chat-square-text text-muted"
                        style={{ fontSize: "3rem" }}
                      ></i>
                      <p className="text-muted mt-3 mb-0">
                        No comments yet. Be the first to add one!
                      </p>
                    </div>
                  )}

                  <CommentPage leadId={lead.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadManagement;

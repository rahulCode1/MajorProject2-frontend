import { Form, Link, useNavigation, redirect } from "react-router-dom";
import axios from "axios";
import SubmitLoadingSpinner from "../components/SubmitLoadingSpinnr";
import {
  showErrorToast,
  showLoadingToast,
  showSuccessToast,
} from "../utils/toast";

const AddNewAgent = () => {
  const navigation = useNavigation();

  const isSubmit = navigation.state === "submitting";

  return (
    <>
      <div className="container-fluid p-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-bottom sticky-top">
          <div className="container-fluid px-4 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="h3 mb-0 fw-bold">Add New Sales Agent</h1>
              <div className="d-flex gap-2">
                <Link to="/" className="btn btn-outline-secondary">
                  <i className="bi bi-house-door me-2"></i>
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <Form method="post">
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter agent name"
                        className="form-control"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter agent email"
                        className="form-control"
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="d-flex gap-2">
                      <button
                        disabled={isSubmit}
                        type="submit"
                        className="btn btn-primary w-100"
                      >
                        <i className="bi bi-check-circle me-2"></i>
                        {isSubmit && <SubmitLoadingSpinner />}
                        {isSubmit ? "Adding agent..." : "Add agent"}
                      </button>
                   
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewAgent;

export const actions = async ({ request }) => {
  const formData = await request.formData();
  const toastId = showLoadingToast("Adding new agent...");

  const data = { name: formData.get("name"), email: formData.get("email") };

  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/agents`, data);
    showSuccessToast(toastId, "New agent added successfully.");
    return redirect("/salesAgent");
  } catch (error) {
    showErrorToast(
      toastId,
      error.response?.data?.message || "Error occurred while add sales agent."
    );
  }
};

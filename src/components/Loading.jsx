import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "300px" }}
    >
      <ClipLoader size={45} color="#3B82F6" />
      <p className="mt-3 text-muted fw-medium">{text}</p>
    </div>
  );
};

export default LoadingSpinner;

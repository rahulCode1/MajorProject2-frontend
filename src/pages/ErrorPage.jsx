import { useRouteError, Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred.";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Page not found.";
    message = "Couldn't find resource page.";
  }

  return (
    <>
      <MainNavigation />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

          <p className="text-gray-500 mt-3 text-base">{message}</p>

          <Link
            to="/"
            className="inline-block mt-6 rounded-md bg-blue-600 px-6 py-2 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

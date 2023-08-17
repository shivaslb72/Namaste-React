import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <h1 className="text-4xl font-bold mb-2">Oops!</h1>
      <h2 className="text-lg mb-2">Something Went Wrong</h2>
      <h2 className="text-red-500">
        {err.status + ": " + err.statusText}
      </h2>
    </div>
  );
};

export default Error;

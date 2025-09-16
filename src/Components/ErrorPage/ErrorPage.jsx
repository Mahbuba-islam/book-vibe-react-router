import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="container mx-auto bg-red-600 w-1/2 rounded-lg px-6 py-12 text-white  ">
            {/* error icon */}
            <div className="text-6xl mb-4 text-center">😵‍💫</div>
            {/* title */}
            <h1 className="text-5xl font-bold text-error mb-2 text-center">Oops!</h1>
            <p className="text-center">Something went wrong!</p>
            <div className="text-center">
              <p>{error.status}</p>
              <p>{error.statusText}</p>
            </div>
           
        </div>
        </div>
       
    );
};

export default ErrorPage;
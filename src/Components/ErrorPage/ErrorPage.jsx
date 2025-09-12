import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            {/* error icon */}
            <div className="text-6xl mb-4">😵‍💫</div>
            {/* title */}
            <h1 className="text-5xl font-bold text-error mb-2">Oops!</h1>
            <p>Something went wrong!</p>
            <div>
              <p>{error.status}</p>
              <p>{error.statusText}</p>
            </div>
           
        </div>
    );
};

export default ErrorPage;
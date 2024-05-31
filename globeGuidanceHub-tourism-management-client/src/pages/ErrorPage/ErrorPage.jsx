import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            {error.status === 404 ? (
                <div className="flex flex-col items-center justify-center space-y-6 bg-[url('/errorBg-1.png')] md:bg-[url('/error-404.jpeg')] bg-no-repeat md:bg-cover bg-contain  bg-center min-h-[90vh] my-[5vh] w-[94%] mx-auto md:bg-opacity-10 rounded-3xl">
                    <h3 className="text-4xl lg:text-7xl">Error Status 404</h3>
                    <h3 className="text-4xl lg:text-6xl">Page Not Found</h3>

                    <Link to="/">
                        <button className="btn btn-ghost text-xl font-bold border-4 border-green-600 rounded-lg text-green-600 py-2 px-4 bg-green-300">
                            Back Home
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center space-y-6 bg-[url('/error-404.jpeg')] bg-no-repeat md:bg-cover bg-contain  bg-center min-h-[90vh] my-[5vh] w-[94%] mx-auto rounded-3xl">
                    <h3 className="text-4xl lg:text-7xl">Page Not Found</h3>

                    <p className="text-red-600 text-center">
                        {error.statusText || error.message}
                    </p>

                    <Link to="/">
                        <button className="btn btn-ghost text-xl font-bold border-4 border-green-600 rounded-lg text-green-600 py-2 px-4 bg-green-300">
                            Back Home
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;

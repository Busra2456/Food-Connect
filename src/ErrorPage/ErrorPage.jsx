import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
      const error = useRouteError();
      console.log(error)
      return (
            <div className="text-center text-4xl mt-82 space-y-3">
                <h1 className="text-6xl my-8 text-red-900">Oops!!!</h1>  
                <p className="text-4xl"> {error.statusText || error.message} </p>
                {
                  error.status === 404 && <div><h3>page not found</h3>
                  <p className="my-2">Go back where you from</p>
                  <Link to={"/"} ><button className="btn text-2xl font-semibold m-3 p-5 text-base-700">Home</button></Link>
                  </div>
                 }
            </div>
      );
};

export default ErrorPage;
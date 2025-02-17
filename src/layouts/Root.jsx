import { Outlet } from "react-router-dom";

const Root = () => {
      return (
            <div className='max-w-7xl mx-auto mt-8 space-y-7'>
                 <Outlet></Outlet> 
            </div>
      );
};

export default Root;
import { Outlet } from "react-router-dom";


const RootAdmin = () => {
  return(
    <>
    <main>
      <Outlet />
    </main>
    </>
  );
} 

export default RootAdmin
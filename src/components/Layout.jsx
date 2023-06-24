import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <>
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-sky-900 px-5 py-10"></div>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
        </main>
      </div>    

    
    </>
  )
}

export default Layout
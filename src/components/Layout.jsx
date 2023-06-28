import { Outlet, Link, useLocation } from "react-router-dom"


export const Layout = () => {

  const uselocation = useLocation()

  return (
    <>
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-sky-900 px-5 py-10">
          <h2 className="text-4xl text-white font-bold text-center"> CRM - CLIENTES</h2>
          <nav className="mt-10">
            <Link className={`${location.pathname === '/' ? 'text-sky-300' : 'text-white'} text-2xl block mt-2 hover:text-sky-300`} to="/">Clientes</Link>
            <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-sky-300' : 'text-white'} text-2xl block mt-2 hover:text-sky-300`}to="/clientes/nuevo">Nuevo Cliente</Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      
        </main>
      </div>    

    
    </>
  )
}

export default Layout
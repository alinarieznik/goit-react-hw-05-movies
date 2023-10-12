import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div>
        <header>
          <nav>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

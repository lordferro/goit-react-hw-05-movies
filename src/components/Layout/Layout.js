import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <LayoutStyled>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </LayoutStyled>
      </header>
      <main>
        <Suspense fallback={<div>loading ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

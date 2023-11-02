import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLink } from './Layout.styled';
import Loader from '../Loader';

export const Layout = () => {
  return (
    <div>
      <div>
        <StyledHeader>
          <StyledNav>
            <StyledLink to="/">Home page</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </StyledNav>
        </StyledHeader>
      </div>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </div>
  );
};

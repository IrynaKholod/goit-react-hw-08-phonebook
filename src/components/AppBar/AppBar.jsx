
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/hooks';
import { Header, PageNav, AuthNav, StyledNavLink, StyledLogoLink,Container} from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header id="header">
      <Container>
        <PageNav>
          <StyledLogoLink to="/">Home</StyledLogoLink>
          {isLoggedIn && <StyledLogoLink to="/contacts">Contacts</StyledLogoLink>}
        </PageNav>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </AuthNav>
        )}
      </Container>
    </Header>
  );
};
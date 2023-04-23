import { Container, Header, StyledLinkBtn1,StyledLinkBtn2, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLinkBtn1 to="/">Home</StyledLinkBtn1>
          <StyledLinkBtn2 to="/tweets">Tweets</StyledLinkBtn2>
        </Nav>
      </Header>
    </Container>
  );
};
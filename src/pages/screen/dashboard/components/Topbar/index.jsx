import NavbarComponent from "./navbar";
import UserSectionComponent from "./userSection";
import { TopbarHeader, Container } from "./styles";

export default function Topbar() {
  return (
    <TopbarHeader>
      <Container>
        <NavbarComponent />
        <UserSectionComponent />
      </Container>
    </TopbarHeader>
  );
}

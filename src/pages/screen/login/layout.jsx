import PropTypes from "prop-types";
import LoginFooterComponent from "./components/Footer";
import Hero from "./components/Hero";
import { Login, LoginContents } from "./styles";

export default function Layout({ children }) {
  return (
    <Login>
      <LoginContents>
        {children}
        <LoginFooterComponent />
      </LoginContents>
      <Hero />
    </Login>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

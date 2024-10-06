import PropTypes from "prop-types";
import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import * as C from "./style";

export default function Layout({ children }) {
  return (
    <C.Layout>
      <Sidebar />
      <C.LayoutContainer>
        <Header />
        <main>{children}</main>
        <Footer />
      </C.LayoutContainer>
    </C.Layout>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

/*
PropTypes.node é utilizado para definir que o children pode ser qualquer tipo de elemento 
renderizável, como uma string, número, elemento React, ou até mesmo um array ou fragmento.
*/

import BannerComponent from "./components/Banner";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import ModulesComponent from "./components/Modules";

export default function Modules() {
  return (
    <section>
      <HeaderComponent />
      <BannerComponent />
      <ModulesComponent />
      <FooterComponent />
    </section>
  );
}

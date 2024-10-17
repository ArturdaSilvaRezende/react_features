import ModulesCardsComponent from "./cards";
import { Modules } from "./styles";

export default function ModulesComponent() {
  return (
    <Modules>
      <div className="container">
        <ModulesCardsComponent />
      </div>
    </Modules>
  );
}

import { HeaderContainer } from "./styles";

import logoHeader from "../../assets/logo.svg";
import effect from "./assets/effect.svg";
import effect2 from "./assets/effect2.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect} />
      <img src={logoHeader} />
      <img src={effect2} />
    </HeaderContainer>
  );
}

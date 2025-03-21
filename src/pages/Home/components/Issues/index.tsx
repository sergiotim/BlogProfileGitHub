// import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";

export function Issues() {
  return (
    <IssuesContainer>
      <StyledNavLink to="/issue">
        <div>
          <h2>Exemplo de issue</h2>
          <span>20/03/2025</span>
        </div>
        <p>body</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}

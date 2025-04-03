import { IssuesContainer, StyledNavLink } from "./styles";
import { Issue } from "../../index";

export function Issues({number,title,body,created_at}:Issue) {

  return (
    <IssuesContainer>
      <StyledNavLink to="/issue">
        <div>
          <h2>{title}</h2>
          <span>{new Date(created_at).toLocaleString().split(",")[0]}</span>
        </div>
        <p>{body}</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}

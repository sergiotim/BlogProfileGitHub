import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import {
  PostAnchors,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";

import { NavLink } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";


export function Post() {

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <div>
            <p>
              <NavLink to="/">
                <a href="">
                  <CaretLeft size={16} />
                  VOLTAR
                </a>
              </NavLink>
            </p>
          </div>
          <div>
            <a href={issueData.html_url} target="_blank">
              VER NO GITHUB
              <ArrowUpRight size={16} />
            </a>
          </div>
        </PostTitle>
        <h1>{issueData.title}</h1>
        <PostAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{issueData.user.login}</span>
          </div>

          <div>
            <Calendar size={18} />
            <span>{dateFormatter.format(new Date(issueData.created_at))}</span>
          </div>

          <div>
            <ChatCircle size={18} />
            <span>{issueData.comments} comentários</span>
          </div>
        </PostAnchors>
      </PostHeader>

      <PostContent>
        <p>{issueData.body}</p>
      </PostContent>
    </PostContainer>
  );
}

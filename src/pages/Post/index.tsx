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

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { issuePostApi } from "../../lib/axios";
import { dateFormatter } from "../../utils/formatter";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: { login: string };
  comments: number;
  html_url: string;
}

export function Post() {
  let { number } = useParams();
  const [issueData, setIssueData] = useState<Issue | null>(null);

  async function fetchIssue() {
    const response = await issuePostApi.get(`/${number}`);
    setIssueData(response.data);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchIssue();
    }, 1000);

    return () => clearTimeout(timer);
  }, [number]);

  if (!issueData) {
    return (
      <p style={{ textAlign: "center", paddingTop: "1rem" }}>
        Carregando Post...
      </p>
    );
  }

  console.log(issueData);

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

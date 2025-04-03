import axios from "axios";
import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";

import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { useEffect, useState } from "react";

interface User {
  avatar_url: string
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
}


export function Summary() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.github.com/users/sergiotim",
      // headers: {'Authorization': 'TOKEN'}
    })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  
  return (
    <SummaryContainer>
      <img src={user?.avatar_url} />
      <section>
        <SummaryHeader>
          <h1>{user?.name}</h1>
          <a href={user?.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{user?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{user?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{user?.company}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{user?.followers}</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}

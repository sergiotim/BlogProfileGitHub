import axios from 'axios'
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";
import { Issues } from "./components/Issues";
import { useEffect, useState } from "react";

export interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [issues,setIssues] = useState<Issue[]>([])

  useEffect(()=>{
    axios({
      method: "get",
      url: 'https://api.github.com/search/issues?q=repo:sergiotim/BlogProfileGitHub',
      // headers: {'Authorization': 'TOKEN'}
    }).then((response)=>{
      setIssues(response.data.items)
    })
  },[])
  console.log(issues)

    

  return (
    <HomeContainer>
      <Summary />
      <IssuesAside>
        {
          issues.map((e) =>
            <Issues
              key={e.number}
              number={e.number}
              title={e.title}
              created_at={e?.created_at}
              body={e?.body}
    
            />
          )
        }
      </IssuesAside>
    </HomeContainer>
  );
}

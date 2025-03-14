import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const searchIssues = axios.create({
  baseURL: "https://api.github.com/search",
});

export const issuePostApi = axios.create({
  baseURL:
    "https://api.github.com/repos/lucaspedronet/TudoLista/issues",
});

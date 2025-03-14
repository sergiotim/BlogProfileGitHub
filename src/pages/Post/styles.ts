import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme["blue-700"]};
  box-shadow: 0 0 15px ${(props) => props.theme["blue-900"]};
  margin-top: -6.25rem;

  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
    margin-bottom: 0.5rem;
  }
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  & > div a {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.875rem;
    text-decoration: none;
    color: ${(props) => props.theme["blue-400"]};
    font-weight: bold;
  }
`;

export const PostAnchors = styled.div`
  display: flex;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > svg {
      color: ${(props) => props.theme["gray-500"]};
    }

    & > span {
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  text-align: justify;
`;

import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: inherit;
  }
`;

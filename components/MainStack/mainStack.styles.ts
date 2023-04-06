import styled from "styled-components";

export const MainStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  grid-template-rows: repeat(autofit, minmax(5px, 1fr));
  width: 100%;
  justify-items: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    padding: 10px;
  }

  p {
    grid-row: 2;
    word-wrap: break-word;
  }
`;

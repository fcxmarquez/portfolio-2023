import styled from "styled-components";

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    min-width: 120px;
    max-width: 150px;
    border: 0.5px solid rgb(46, 3, 3);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    flex-basis: 20%;
    height: 40px;

    p {
      font-weight: 700;
      color: black;
      font-size: 0.75rem;
    }
  }
`;

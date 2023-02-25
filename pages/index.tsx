import { Layout } from "@/components/Layout/Layout";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 20px;
  color: red;
`;

export default function Home() {
  let number: any;

  return (
    <>
      <Layout>
        Hi
        <StyledParagraph>Styled Paragraph</StyledParagraph>
      </Layout>
    </>
  );
}

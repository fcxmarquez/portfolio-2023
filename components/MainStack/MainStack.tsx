import Image from "next/image";
import { MainStackContainer } from "./mainStack.styles";

export const MainStack = () => {
  return (
    <MainStackContainer>
      <Image
        src="https://github.com/tomchen/stack-icons/raw/master/logos/react.svg"
        alt="React Icon"
        width={100}
        height={100}
      />
      <p>React</p>

      <Image
        src="https://github.com/tomchen/stack-icons/raw/master/logos/typescript-icon.svg"
        alt="Typescript Icon"
        width={100}
        height={100}
      />
      <p>Typescript</p>

      <Image
        src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/nextjs.svg"
        alt="NextJs Icon"
        width={100}
        height={100}
      />
      <p>NEXTjs</p>
    </MainStackContainer>
  );
};

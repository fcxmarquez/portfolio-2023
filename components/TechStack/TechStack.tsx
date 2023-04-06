import Image from "next/image";
import { TechStackContainer } from "./techStack.styles";

const imageSize = 20;

export const TechStack = () => {
  return (
    <TechStackContainer>
      <div>
        <Image
          src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/redux.svg"
          alt="Redux Icon"
          width={imageSize}
          height={imageSize}
        />
        <p>Redux</p>
      </div>

      <div>
        <Image
          src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg"
          alt="JavaScript Icon"
          width={imageSize}
          height={imageSize}
        />
        <p>JavaScript</p>
      </div>

      <div>
        <Image
          src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/sass.svg"
          alt="SASS"
          width={imageSize}
          height={imageSize}
        />
        <p>SASS</p>
      </div>

      <div>
        <Image
          src="https://github.com/tomchen/stack-icons/raw/master/logos/jest.svg"
          alt="Jest Icon"
          width={imageSize}
          height={imageSize}
        />
        <p>Jest</p>
      </div>

      <div>
        <Image
          src="https://github.com/tomchen/stack-icons/raw/master/logos/git-icon.svg"
          alt="Git"
          width={imageSize}
          height={imageSize}
        />
        <p>Git</p>
      </div>

      <div>
        <Image
          src="https://github.com/tomchen/stack-icons/raw/master/logos/npm.svg"
          alt="NPM"
          width={imageSize}
          height={imageSize}
        />
        <p>NPM</p>
      </div>

      <div>
        <Image
          src="https://github.com/tomchen/stack-icons/raw/master/logos/webpack.svg"
          alt="Webpack"
          width={imageSize}
          height={imageSize}
        />
        <p>Webpack</p>
      </div>

      <div>
        <Image
          src="https://cdn-media-1.freecodecamp.org/images/1*p1TndLk3UsGPBsM7qHPZIw.png"
          alt="Styled Components"
          width={imageSize}
          height={imageSize}
        />
        <p>S.Components</p>
      </div>

      <div>
        <Image
          src="https://github.com/tomchen/stack-icons/raw/master/logos/mongodb-icon.svg"
          alt="MongoDB Icon"
          width={imageSize}
          height={imageSize}
        />
        <p>MongoDB</p>
      </div>
    </TechStackContainer>
  );
};

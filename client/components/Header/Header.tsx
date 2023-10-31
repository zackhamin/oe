import HeaderContainer from "./Header.styles";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <div></div>
      <div>
        <Image
          src="/octopus-logo.svg"
          alt="Logo"
          className="logo-image"
          height="50px"
          width="150px"
        />
      </div>
      <div>
        <Image
          src="/basket.svg"
          alt="Logo"
          className="icon-image"
          height="25px"
          width="25px"
        />
      </div>
    </HeaderContainer>
  );
};

export { Header };

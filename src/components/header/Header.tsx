import React from "react";
import Image from "next/image";
import logo from './../../assets/icons/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-10 pl-20">
      <Image src={logo} alt="Logo" priority={true} />
    </header>
  );
};

export default Header;
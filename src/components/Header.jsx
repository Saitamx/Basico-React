import React from "react";

const Header = ({ titulo }) => {
  return (
    <h1 className="titulo" id="titulo">
      {titulo}
    </h1>
  );
};

export default Header;

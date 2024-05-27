import React, { ReactElement } from "react";

interface IHeaderProps {
  children: React.ReactNode;
}

const Header = (props: IHeaderProps) => {
  return (
    <div>
      This is a header component
      {props.children}
    </div>
  );
};

export default Header;

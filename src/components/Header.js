import { useState, useRef } from "react";

const Header = ({menus, visibleSection}) => {

  const handleClick = (anchor) => () => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <>
          <nav>
          {menus.map((menu, index) => (
              <a id={`link-${menu}`} key={index}
                className={visibleSection === menu ? "active" : ""} href={`#${menu}`} onClick={handleClick(`${menu}`)}>{menu}</a>
            ))}
          </nav>
    </>
  );
};
export default Header;

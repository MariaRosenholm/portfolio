import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = ({ buttonNames }) => {
  let location = useLocation();
  let path = location.pathname;
  const [classes, setClasses] = useState("menu hide");

  useEffect(() => {
    setClasses("menu hide");
  }, [location]);

  const clickHandler = () => {
    classes.includes("hide") ? setClasses("menu") : setClasses("menu hide");
  };

  return (
    <div className="menu-icon">
      <div className={classes} id="menuWrapper">
        {buttonNames.map((name) => {
          return (
            <Link to={`/${name}`}>
              <div>
                <p>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

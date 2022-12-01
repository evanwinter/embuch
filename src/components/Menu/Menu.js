import React from "react";
import PropTypes from "prop-types";
import Spiral from "../../images/spiral.png";
import { Navigation, NavigationLink } from "./Menu.styled";

const Menu = ({ pathname }) => {
  return (
    <Navigation>
      {pathname !== "/" && (
        <NavigationLink to="/" className="py-none px-md m-none mr-sm">
          <img
            style={{ width: 32, height: "auto" }}
            src={Spiral}
            alt="spiral"
          />
        </NavigationLink>
      )}
      <NavigationLink to="/designs" data-active={pathname.includes("/designs")}>
        work
      </NavigationLink>

      <NavigationLink to="/fun" data-active={pathname.includes("/fun")}>
        fun
      </NavigationLink>

      <NavigationLink to="/about" data-active={pathname.includes("/about")}>
        me
      </NavigationLink>
    </Navigation>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Menu;

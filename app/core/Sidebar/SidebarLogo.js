import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";

import {onNavStyleChange, toggleCollapsedSideNav} from "../../../redux/actions";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";


const SidebarLogo = () => {
  const themeType = useSelector(({settings}) => settings.themeType);
  const width = useSelector(({settings}) => settings.width);
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);
  const dispatch = useDispatch();

  let navStyle = useSelector(({settings}) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
    <div className="gx-layout-sider-header">
      

      <Link href="/" >
        <a className="gx-site-logo" >
        {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && width >= TAB_SIZE ?
          <img alt="lo" src={("/images/logo.webp")}/> :
          themeType === THEME_TYPE_LITE ?
            <img alt="logo1" src={("/images/logo-white.png")}/> :
              <img alt="logo2" src={("/images/logo.webp")} style={{ width: "48px" }} />}
        <span style={{fontSize:"120%",display:"flex",}}><span style={{color:"white",}}> DENTA</span> <b style={{color: "#b32134"}}>BEST</b></span>
        </a>
      </Link>
      {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) ? <div className="gx-linebar">
        <i
          className={`gx-icon-btn icon icon-${navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'} ${themeType !== THEME_TYPE_LITE ? 'gx-text-white' : ''}`}
          onClick={() => {
            if (navStyle === NAV_STYLE_DRAWER) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else if (navStyle === NAV_STYLE_FIXED) {
              dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR))
            } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            } else {
              dispatch(onNavStyleChange(NAV_STYLE_FIXED))
            }
          }}
        />
      </div> : null}
    </div>
  );
};

export default SidebarLogo;

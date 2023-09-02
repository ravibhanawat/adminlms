import React, {useEffect} from "react";
import {Menu} from "antd";
import Link from "next/link";

import {useRouter} from 'next/router'
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const themeType = useSelector(({settings}) => settings.themeType);

  const dispatch = useDispatch();
  const router = useRouter()

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1) || 'sample';
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <React.Fragment>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link href="/sample">
                <a><i className="icon icon-dasbhoard"/><span>Dasbhoard</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link href="/usermanage">
                <a><i className="icon icon-user"/><span>User Manage</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link href="/blog">
                <a><i className="icon icon-apps"/><span>Blog</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="course">
              <Link href="/course">
                <a><i className="icon icon-card"/><span>Course</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="courseCat">
              <Link href="/course/courseCat">
                <a><i className="icon icon-card"/><span>Course category </span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="exam">
              <Link href="/exam">
                <a><i className="icon icon-card"/><span>Exam</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="examCat">
              <Link href="/exam/examCat">
                <a><i className="icon icon-card"/><span>Exam category </span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="subject">
              <Link href="/subject">
                <a><i className="icon icon-copy"/><span>Subject</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="question">
              <Link href="/question">
                <a><i className="icon icon-auth-screen"/><span>Question Bank</span></a>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;


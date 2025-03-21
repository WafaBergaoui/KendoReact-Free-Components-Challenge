"use client";

import { useState, useEffect } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Avatar } from "@progress/kendo-react-layout";
import {
  homeIcon,
  gridIcon,
  calendarIcon,
  bellIcon,
  changeManuallyIcon,
  logoutIcon,
} from "@progress/kendo-svg-icons";
import { Tooltip } from "@progress/kendo-react-tooltip";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Tooltip position="right" openDelay={100}>
      <div className="layout-container">
        {/* Sidebar */}
        <aside
          className="sidebar-container"
          style={{ width: collapsed ? "70px" : "250px" }}
        >
          {/* Sidebar Header */}
          <div>
            <div className="sidebar-header">
              <div>
                {!collapsed && (
                  <div className="sidebar-user">
                    <Avatar rounded="full" type="image">
                      <Image
                        src="/pictures/emma.jpg"
                        alt="Test Woman Image"
                        width={100}
                        height={100}
                      />
                    </Avatar>
                    <div>
                      <h2 className="user-title">Emma Grace</h2>
                      <p className="user-subTitle">Software Engineer</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="collapse-button"
              >
                {collapsed ? "▶" : "◀"}
              </button>
            </div>
            {/* Menu Items */}
            <nav>
              {[
                "Dashboard",
                "Transactions",
                "Budget",
                "Reminders",
                "Advice",
              ].map((item, index) => {
                const icons = [
                  homeIcon,
                  gridIcon,
                  calendarIcon,
                  bellIcon,
                  changeManuallyIcon,
                ];
                return (
                  <Link href={`/${item.toLowerCase()}`} key={index}>
                    <Button svgIcon={icons[index]} className="sidebar-buttons">
                      {collapsed ? "" : item}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div>
            <hr className="sidebar-hr" />
            <Button
              svgIcon={logoutIcon}
              title="Logout"
              className="logout-button"
            >
              {collapsed ? "" : "Logout"}
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="main-content"
          style={{
            marginLeft: collapsed ? "70px" : "250px",
          }}
        >
          {children}
        </main>
      </div>
    </Tooltip>
  );
};

export default Layout;

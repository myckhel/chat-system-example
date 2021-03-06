import { memo } from "react";
import DesktopSidebar from "./DesktopSidebar.jsx";
import MobileSidebar from "./MobileSidebar.jsx";

function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}

export default memo(Sidebar);

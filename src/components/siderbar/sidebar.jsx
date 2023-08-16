import { IconButton } from "@mui/material";

import SidebarHeader from "./sidebarHeader";
import SidebarSearch from "./sidebarSearch";

const Siderbar = () => {
  return (
    <div className="sidebar">
      {/* header */}
      <SidebarHeader />

      {/* search */}
      <SidebarSearch />
    </div>
  );
};

export default Siderbar;

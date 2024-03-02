import React from "react";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import path from "path";
interface IsSidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  item?: IsSubItem[];
}
interface IsSubItem {
  name: string;
  path: string;
}

const items: IsSidebarItem[] = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
];
const Sidebar = () => {
  return (
    <div className=" fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full ">
        <img src="/images/logo.png" alt="logo" className="h-10 w-fill" />
        <div>sidebar items</div>
      </div>
    </div>
  );
};

export default Sidebar;

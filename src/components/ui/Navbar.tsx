import CoinIcon from "../icons/CoinIcon";
import CrownBadgeIcon from "../icons/CrownBadgeIcon";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import NotificationActiveIcon from "../icons/NotificationActiveIcon";
import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-3 border-b px-4 py-2">
      <Button variant={"ghost"} size={"icon"}>
        <HamburgerMenuIcon />
      </Button>
      <div className="flex items-center gap-3.5">
        <Button variant={"ghost"} size={"icon"}>
          <NotificationActiveIcon />
        </Button>
        <div className="from-primary flex items-center gap-2 rounded-full bg-gradient-to-r via-[#CD89FF] to-[#EAC1ED] p-1 pl-3 text-sm font-semibold text-white">
          <div className="flex items-center gap-2 p-1">
            <CoinIcon />
            <span>5 Koin</span>
          </div>
          <div className="outline-primary relative size-9 rounded-full outline-[1.5px]">
            <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute size-full rounded-full object-cover p-[1px]"
              alt="Profile Picture"
            />
            <CrownBadgeIcon className="absolute -right-1 bottom-0" />
          </div>
        </div>
      </div>
    </nav>
  );
}

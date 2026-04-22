"use client";

import { Bolt, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback } from "../ui/avatar";

const AppTopbar = () => {
  return (
    <header className="w-full border-b border-emerald-500/20 bg-linear-to-r from-[#009060] to-[#003a2c] backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-[#00b37e] p-2">
            <Bolt size={24} color="white" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-medium tracking-tight text-white">ApplyFlow</h1>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          {/* Avatar  */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                aria-label="Open user menu"
                className="group relative focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                <Avatar className="h-10 w-10 border-2 border-emerald-400/30 transition-transform group-hover:scale-105">
                  <AvatarFallback className="bg-linear-to-br from-emerald-500 to-emerald-700 text-white">
                    J
                  </AvatarFallback>
                </Avatar>
              </button>
            </PopoverTrigger>

            {/* Popup Logout */}
            <PopoverContent align="end" className="w-48 border-zinc-800 bg-black p-2 shadow-2xl">
              <button
                // TODO : implement logout function
                onClick={() => console.log("logout")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-900 active:scale-95"
              >
                <LogOut size={18} className="text-zinc-400" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default AppTopbar;

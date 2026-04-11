import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";

const AppContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <header className="flex h-16 items-center border-b border-emerald-900/30 bg-linear-to-r from-[#03271e] to-[#01110d] px-6 backdrop-blur-xl">
        <div className="flex w-full items-center">
          {/* SEARCH */}
          <div className="flex w-2/5 max-w-md min-w-65">
            <div className="relative w-full">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <Input
                placeholder="Search applications..."
                className="h-9 w-full border-gray-700 bg-gray-800/50 pr-3 pl-9 text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Bell className="h-4 w-4 text-gray-300" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/3 bg-emerald-500/20 text-xs text-emerald-300">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-linear-to-r from-[#054031] to-[#011a14] p-6">
        {children}
      </main>
    </div>
  );
};

export default AppContent;

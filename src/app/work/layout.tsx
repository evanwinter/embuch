import { SideDrawer } from "../components/side-drawer";
import { Sidebar } from "./sidebar";

interface WorkLayoutProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return (
    <div className="p-4 sm:p-8 lg:p-12 flex items-start xl:gap-12 relative">
      <div className="xl:hidden">
        <SideDrawer>
          <Sidebar className="p-6 pr-8" />
        </SideDrawer>
      </div>
      <Sidebar className="sticky top-12 hidden shrink-0 xl:flex xl:flex-col xl:col-span-2" />
      <main className="mt-16">{children}</main>
    </div>
  );
}

import { Outlet } from "react-router";
import { BottomNavBar } from "@/components/BottomNavBar";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex1 max-w-md mx-auto w-full pb-20">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
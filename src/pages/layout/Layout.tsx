import { Outlet } from "react-router";
import { AppBar } from "@/components/AppBar";
import { BottomNavBar } from "@/components/BottomNavBar";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <main className="flex1 max-w-md mx-auto w-full pt-16 pb-20">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
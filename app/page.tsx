import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto am:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });

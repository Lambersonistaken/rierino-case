import { ElementsProvider } from "@/context/ElementsContext";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import RenderingZone from "@/components/RenderingZone";
import PropertiesSidebar from "@/components/PropertiesSidebar";

export default function Home() {
  return (
    <ElementsProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <RenderingZone />
          <PropertiesSidebar />
        </div>
      </div>
    </ElementsProvider>
  );
}

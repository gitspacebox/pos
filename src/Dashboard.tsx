import MenuCard from "./MenuCard";
import MySidebar from "./MySidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MySidebar2 from "./MySidebar2";
import MyCard from "./MyCard";
import CardContainer from "./CardContainer";

export default function Dashboard() {
   return (
      <div className="relative">
         <SidebarProvider className="bg-sidebar">
            <MySidebar />
            <div className="ml-2 flex-1">
               <div className="sticky top-1">
                  <SidebarTrigger className="bg-white" />
               </div>
               {/* <div className="h-[2000px] flex-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia dolorum eius laborum explicabo labore. Velit modi
                  doloremque explicabo qui suscipit ad molestiae natus doloribus
                  earum, excepturi, dolor aliquid debitis in!
               </div> */}
               {/* <MyCard /> */}
               <CardContainer />
            </div>
            <MenuCard />
           
         </SidebarProvider>
      </div>
   );
}

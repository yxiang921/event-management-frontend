import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { OrgHeaderProvider } from "./context/OrgHeaderContext.jsx";
import { EventsProvider } from "./context/EventContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SidebarProvider>
      <OrgHeaderProvider>
        <EventsProvider>
          <App />
        </EventsProvider>
      </OrgHeaderProvider>
    </SidebarProvider>
  </BrowserRouter>
);

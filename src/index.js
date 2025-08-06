import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import routes from "./routes"; 
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={routes} />
    </MantineProvider>
  </React.StrictMode>
);

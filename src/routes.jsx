import { createBrowserRouter } from "react-router-dom";
import LandingFile from "./pages/LandingFile";
import PerformPuja from "./pages/PerformPuja";
import PujaProcess from "./pages/PujaProcess";
import ReviewBooking from "./pages/ReviewBooking";
import ThanYou from "./pages/ThanYou";

const routes = createBrowserRouter([
    { path: "/", element: <LandingFile /> },
    { path: "perform-puja", element: <PerformPuja /> },
    { path: "puja-process", element: <PujaProcess /> },
    { path: "review-booking", element: <ReviewBooking /> },
    { path: "thank-you", element: <ThanYou /> },
]);

export default routes;

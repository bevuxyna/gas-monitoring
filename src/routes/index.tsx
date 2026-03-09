import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import Protocols from "../pages/Protocols/Protocols";
import Protocol from "../pages/Protocol/Protocol";
import Analytics from "../pages/Analytics/Analytics";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: 'main',
                index: true,
                Component: Main,
            },
            {
                path: 'protocols',
                Component: Protocols,
            },
            {
                path: 'protocols/form/:id?',
                Component: Protocol,
            },
            {
                path: 'analytics',
                Component: Analytics,
            }
        ]
    }
]);

export default router;
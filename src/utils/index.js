import { Pages } from "../pages";
import Main from "../pages/Main";

export const PUBLIC_ROUTES = [
    {id: 1, path: "/", element: <Main />},
    {id: 2, path: "/cart/", element: <Pages.Cart />},
    {id: 3, path: "/more/", element: <Pages.More />},
    {id: 4, path: "/order/", element: <Pages.Order />},
];

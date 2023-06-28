import { Pages } from "../pages";

export const PUBLIC_ROUTES = [
    {id: 1, path: "/", element: ''},
    {id: 2, path: "/cart/", element: <Pages.Cart />},
    {id: 3, path: "/more/", element: <Pages.More />},
    {id: 4, path: "/order/", element: <Pages.Order />},
];

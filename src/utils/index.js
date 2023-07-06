import { Pages } from "../pages";


export const PUBLIC_ROUTES = [
    {id: 1, path: "/", element: <Pages.Main/>},
    {id: 2, path: "/cart/", element: <Pages.Cart />},
    {id: 3, path: "/more/:id", element: <Pages.More />},
    {id: 4, path: "/order/", element: <Pages.Order />},
    {id: 5, path: "/products/", element: <Pages.Products /> },
];

export const navList = [
  {
    id: 1,
    title: 'RĒFĒRENCES',
  },
  {
    id: 2,
    title: 'SERVICES',
  },
  {
    id: 3,
    title: 'ĒQUIPE',
  },
  {
    id: 4,
    title: 'PRENDRE RDV',
  },
  {
    id: 5,
    title: 'CONTACT',
  },
]

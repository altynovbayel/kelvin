import { Pages } from "../pages";
import Main from "../pages/Main";

export const PUBLIC_ROUTES = [
    {id: 1, path: "/", element: <Pages.Main/>},
    {id: 2, path: "/cart/", element: <Pages.Cart />},
    {id: 3, path: "/more/", element: <Pages.More />},
    {id: 4, path: "/order/", element: <Pages.Order />},
];

export const navList = [
  {
    id: 1,
    title: 'Главная',
  },
  {
    id: 2,
    title: 'Товары',
  },
  {
    id: 3,
    title: 'Контакты',
  },
  {
    id: 4,
    title: 'Заказать',
  },
  {
    id: 5,
    title: 'Корзина',
  },
]

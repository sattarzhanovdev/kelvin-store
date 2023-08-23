import { Pages } from "../pages";


export const PUBLIC_ROUTES = [
    {id: 1, path: "/", element: <Pages.Main/>},
    {id: 2, path: "/cart/", element: <Pages.Cart />},
    {id: 3, path: "/more/:id", element: <Pages.More />},
    {id: 4, path: "/order/", element: <Pages.Order />},
    {id: 5, path: "/products/", element: <Pages.Products /> },
    {id: 6, path: "/oneClick/", element: <Pages.OneClick /> },
    {id: 7, path: "/privacy-policy/", element: <Pages.Policy /> },
    {id: 8, path: "/confidentiality/", element: <Pages.Confidentiality /> },
    {id: 9, path: "/pay-info/", element: <Pages.PayInfo /> },
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

export const productSizes = [
  {
    id: 1,
    name: 'S',
  },
  {
    id: 2,
    name: 'M',
  },
  {
    id: 3,
    name: 'L',
  },
  {
    id: 4,
    name: 'XL',
  },
]
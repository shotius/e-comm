import { Roles } from "./Roles";

export const AppRoutes =
  [
     {
      path: 'login',
      view: 'Login',
      isPrivate: false,
      exact: true
    },
     {
      path: 'register',
      view: 'Register',
      isPrivate: false,
      exact: true
    },
     {
      path: '',
      view: 'Home',
      isPrivate: true,
      exact: true
    },
     {
      path: 'products/:page(\\d+)', // matches only numbers e.g /products/1
      view: 'Home',
      isPrivate: true,
      exact: true
    },
     {
      path: 'products/:category/:id',
      view: 'ProductDetailed',
      isPrivate: true,
      exact: true
    },
     {
      path: 'products/:category([A-Za-z]+)/page/:page(\\d+)', // the first one matches only strings, e.g /products/laptops
      view: 'ProductList',
      isPrivate: true,
      exact: true
    },
     {
      path: 'Search/:keyword',
      view: "SearchPage",
      isPrivate: true,
      exact: true,
    },
     {
      path: "basket",
      view: "Basket",
      isPrivate: true,
      exact: true
    },
     {
      path: 'profile/admin',
      view: "ProfilePage",
      isPrivate: true,
      exact: true,
      permission: Roles.admin
    },
    {
      path: "profile/user",
      view: "ProfilePage",
      isPrivate: true,
      exact: true,
    }
  ]
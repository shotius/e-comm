export const AppRoutes =
  {
    login: {
      path: 'login',
      view: 'Login',
      isPrivate: false,
      exact: true
    },
    register: {
      path: 'register',
      view: 'Register',
      isPrivate: false,
      exact: true
    },
    home: {
      path: '',
      view: 'Home',
      isPrivate: true,
      exact: true
    },
    products: {
      path: 'products/:page(\\d+)', // matches only numbers e.g /products/1
      view: 'Home',
      isPrivate: true,
      exact: true
    },
    productDetailed: {
      path: 'products/:category/:id',
      view: 'ProductDetailed',
      isPrivate: true,
      exact: true
    },
    productsList: {
      path: 'products/:category([A-Za-z-]+)/page/:page(\\d+)', // the first one matches only strings, e.g /products/laptops
      view: 'ProductList',
      isPrivate: true,
      exact: true
    },
    search : {
      path: 'Search/:keyword',
      view: "SearchPage",
      isPrivate: true,
      exact: true,
    },
    basket: {
      path: "basket",
      view: "Basket",
      isPrivate: true,
      exact: true
    },
  }

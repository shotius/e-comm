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
      path: 'products',
      view: 'Home',
      isPrivate: true,
      exact: true
    },
    productDetailed: {
      path: 'products/:category/:id',
      view: 'ProductDetailed',
      isPrivate: true,
      exact: false
    },
    productsList: {
      path: 'products/:category',
      view: 'ProductList',
      isPrivate: true,
      exact: true
    },
    search : {
      path: 'search/:keyword',
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

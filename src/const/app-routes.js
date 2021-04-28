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
      view: 'Products',
      isPrivate: true,
      exact: true
    },

    products: {
      path: 'products',
      view: 'Products',
      isPrivate: true,
      exact: true
    },
    productsList: {
      path: 'products/:category',
      view: 'ProductList',
      isPrivate: true,
      exact: false
    },
    basket: {
      path: "basket",
      view: "Basket",
      isPrivate: true,
      exact: true
    }
  }

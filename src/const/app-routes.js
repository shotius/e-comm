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
    productsList: {
      path: 'products/:category',
      view: 'ProductList',
      isPrivate: true,
      exact: false
    }
  }

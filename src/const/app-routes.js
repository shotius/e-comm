export const AppRoutes =
  {
    login: {
      path: 'login',
      view: 'Login',
      isPrivate: false,
      // exact: true
    },
    register: {
      path: 'register',
      view: 'Register',
      isPrivate: false,
      // exact: true
    },
    products: {
      path: 'products',
      view: 'Products',
      isPrivate: true,
      // exact: true
    }
  }

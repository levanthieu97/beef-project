import _ from 'lodash';
import CommonActions from '../common/CommonActions';

export const DEFAULT_ROUTES = [
    {
      path: "/",
      meta: {
        title: 'NOW DELI | Fresh - Fast - Free ship'
      },
      exact: true,
      name: 'Home',
      pageContainer: 'homePageContainer',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/home-component'))
    },
    {
      path: "/cart",
      meta: {
        title: 'NOW DELI | Fresh - Fast - Free ship'
      },
      exact: true,
      name: 'Cart',
      pageContainer: 'cartPageContainer',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/cart-component'))
    },
    {
      path: "/collections",
      name: 'Collections',
      meta: {
        title: 'BEEF - NOW DELI | Fresh - Fast - Free ship',
      },
      exact: true,
      pageContainer: 'collectionPageContainer',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/collections-component'))
    },
    {
      path: '/products/:id',
      name: 'Products',
      meta: {
        title: 'BEEF - NOW DELI | Fresh - Fast - Free ship',
      },
      pageContainer: 'productsPageComponent',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/products-component'))
    },
    {
      path: '/403',
      meta: {
        title: 'Access Denied'
      },
      exact: true,
      name: 'AccessDenied',
      pageContainer: 'denyPageContainer'
    },
    {
      path: '/404',
      meta: {
        title: 'Not Found'
      },
      exact: true,
      name: 'NotFound',
      pageContainer: 'notFoundPageContainer',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/page-not-found-component'))
    },
    {
      path: '/500',
      meta: {
        title: 'Internal Error Server'
      },
      exact: true,
      name: 'ServerError',
      pageContainer: 'maintenancePageContainer',
      container: CommonActions.lazyWithPreload(() => import('../modules/pages/maintenance-component'))
    },
    {
      path: '*',
      meta: {
        title: 'Not Found',
      },
      exact: false,
      name: 'NotFound',
      pageContainer: 'notFoundPageContainer'
    },
]


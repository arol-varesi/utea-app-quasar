
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MyLayout.vue'),
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { menu: 'Root',
        name: '',
        path: '',
        component: () => import('pages/Index.vue') },
      { menu: 'Pagine',
        name: 'Componenti',
        path: 'mag',
        component: () => import('../pages/magEle.vue') },
      { menu: 'Pagine',
        name: 'TestQuasar',
        path: 'testquasar',
        component: () => import('../pages/testquasar.vue') },
      { menu: 'Pagine',
        name: 'Simboli',
        path: 'simboli',
        component: () => import('../pages/simboli.vue') },
      { menu: 'Sistema',
        name: 'Lingue',
        path: 'lingue',
        component: () => import('../pages/lingue.vue') },
      { menu: '?',
        name: 'Info',
        path: 'info',
        component: () => import('../pages/info.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

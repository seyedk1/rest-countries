const routes = [
  // Main Layout
  {
    path: "/",
    name: "main-page",
    component: () => import("layouts/MainLayout/MainLayout.vue"),
    children: [
      // Home Page
      {
        path: "",
        name: "home",
        component: () => import("pages/HomePage/HomePage.vue"),
      },

      // Details Page
      {
        path: "/details-page",
        name: "details-page",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "details-page" */ "pages/DetailsPage/DetailsPage.vue"
          ),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

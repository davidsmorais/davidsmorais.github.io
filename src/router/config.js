const routes = [
  {
    path: "/post",
    component: "BlogPost",
  },
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
];

export default routes;

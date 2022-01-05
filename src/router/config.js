const routes = [
  {
    path: "/post",
    component: "BlogPost",
  },
  {
    path: "/all-posts",
    component: "AllPosts",
  },
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
];

export default routes;

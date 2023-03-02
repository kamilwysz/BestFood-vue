import { Capitalize } from "@/functions/utilities";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("../views/AboutView.vue")
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () =>
        import("../views/RecipesView.vue")
    },
    {
      path: "/recipes/:id",
      name: "recipesDetails",
      component: () =>
        import("../views/RecipeDetailView.vue")
    },
    {
      path: "/recipes/category/:name",
      name: "recipesCategories",
      component: () =>
        import("../views/RecipeCategoryView.vue")
      },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("../views/ContactView.vue")
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "recipesDetails") {
    const routerParamsId = to.params.id
    const routerParamsArr = routerParamsId.split("-");

    document.title = `${Capitalize(
      routerParamsArr.slice(0, routerParamsArr.length - 1).join(" ")
    )} - BestFood`;
  } else if (to.name === "recipesCategories") {
    document.title = `${Capitalize(String(to.params.name))} Recipes - BestFood`;
  } else {
    document.title = `${Capitalize(String(to.name))} - BestFood`;
  }

  next();
});



export default router;

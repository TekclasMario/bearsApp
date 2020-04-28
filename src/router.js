import Vue from "vue";
import Router from "vue-router";
import Projects from "./views/Projects";
import Team from "./views/Team";
import Landing from "./views/Landing";
import EfrenUi from "./views/EfrenUi";
import IvanUi from "./views/IvanUi";
import MamaKoalaUi from "./views/MamaKoalaUi";
import Chores from "@/components/Chores";
import Stars from "@/components/Stars"; 
import Prices from "@/components/Prices"; 
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "team",
      component: Team,
      meta: {requiresAuth:false
            }
    },
    {
      path: "/EfrenUi",
      name: "efrenui",
      component: EfrenUi,
      children: [
                {
                    path: "chores",
                    name: "chores",
                    component: Chores
                },
                {
                    path: "stars",
                    name: "stars",
                    component: Stars
                },
                {
                    path: "prices",
                    name: "prices",
                    component: Prices
                }
            ],
      
      meta: {requiresAuth:false}
    },
              {
      path: "/IvanUi",
      name: "ivanui",
      component: IvanUi,
                    children: [
                {
                    path: "chores",
                    name: "chores",
                    component: Chores
                },
                {
                    path: "stars",
                    name: "stars",
                    component: Stars
                },
                {
                    path: "prices",
                    name: "prices",
                    component: Prices
                }
            ],
          meta: {requiresAuth:false
            }
    },
                   {
      path: "/MamaKoalaUi",
      name: "mamakoalaui",
      component: MamaKoalaUi,
          meta: {requiresAuth:false
            }
    },
    {
      path: "/Projects",
      name: "projects",
      component: Projects,
          meta: {requiresAuth:false
            }
    },
    {
      path: "/Landing",
      name: "landing",
      component: Landing
    },
  ]
});

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'landing'
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router













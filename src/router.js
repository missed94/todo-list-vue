import Vue from 'vue'
import VueRouter from 'vue-router'
import todo from './components/todo'
import todoView from "./components/todoView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: todo,
  },
  {
    path: '/view/:todoName',
    component: todoView,
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
})

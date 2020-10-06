import Vuex, {Store} from "vuex";
import todo from './to-do'
import {VueConstructor} from "vue";
import { getModule } from 'vuex-module-decorators'
import VuexORM from "@vuex-orm/core";
import TodoItem from "../models/todo-item";

let todoStore: todo


function initialiseStores(store: Store<any>): void {

  todoStore = getModule(todo, store)
}

export { todoStore, TodoItem }

export function createStore(vue: any) {
  vue.use(Vuex)

  const database = new VuexORM.Database()
  database.register(TodoItem)

  const store =  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {todo},
    plugins: [VuexORM.install(database)]
  });

  initialiseStores(store)

  return store;
}

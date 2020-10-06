import { Module, VuexModule, Action } from 'vuex-module-decorators';
import TodoItem from "../models/todo-item";
// @ts-ignore
import axios from "axios/dist/axios";

@Module({ stateFactory: true, name: 'todoStore' })
export default class ToDo extends VuexModule {
    items: TodoItem[] = []

    @Action({rawError: true})
    async fetchAll() {
        const todoItemsData = await axios({
            url: '/todo-items',
            method: 'get',
            baseURL: 'http://192.168.178.104:1337/'
        })
        await TodoItem.insert(todoItemsData);
    }

    @Action({rawError: true})
    async updateTodoItem({id, checked}: {id: string, checked: boolean}) {
        await axios({
            url: '/todo-items/' + id,
            method: 'put',
            baseURL: 'http://192.168.178.104:1337/',
            data: {
                checked: checked
            }
        })
    }
}


<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mb-2" v-for="todoItem in todoItems" :key="todoItem.id">
        <v-card-title class="headline">
          <v-checkbox v-model="todoItem.checked" @change="updateTodoItem(todoItem, $event)"></v-checkbox>
          {{todoItem.label}}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {TodoItem, todoStore} from "store/src/store";
import {Component, Vue} from "vue-property-decorator";

@Component
export default class IndexPage extends Vue {
  async created() {
    await todoStore.fetchAll()
    setInterval(()=> {
      todoStore.fetchAll()
    }, 5000)
  }

  get todoItems() {
    return TodoItem.all()
  }

  updateTodoItem(todoItem: TodoItem, newValue: boolean) {
    todoStore.updateTodoItem({ id: todoItem.$id as string, checked: newValue})
  }
}
</script>

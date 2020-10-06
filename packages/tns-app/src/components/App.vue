<template>
    <Page>
        <ActionBar title="Welcome2 to NativeScript-Vue!"/>
      <ListView v-for="(todoItem, index) in todoItems">
        <v-template>
          <FlexboxLayout alignItems="center" justifyContent="space-between" padding="4">
            <Label :text="todoItem.label" height="50" />
            <Switch v-model="todoItem.checked" @checkedChange="updateTodoItem(todoItem)"></Switch>
          </FlexboxLayout>
        </v-template>
      </ListView>
    </Page>
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

  updateTodoItem(todoItem: TodoItem) {
    const newValue = todoItem.checked;
    todoStore.updateTodoItem({ id: todoItem.id as string, checked: newValue})
  }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>

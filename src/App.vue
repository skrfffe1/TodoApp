<template>
  <div class="layout gap-20">
    <div class="grow">
      <h1 class="pb-8 flex items-center text-5xl font-extrabold dark:text-white">Todo App</h1>
      <form action="">
        <div class="flex">
          <div>
            <input v-model="store.todoInput"
              class="w-80 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" placeholder="Enter todo">
          </div>
          <div>
            <button type="button" @click="store.addTodo()"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 py-2.5 ml-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add</button>
          </div>
        </div>

        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
          option</label>
        <select v-model="store.filterTodo" id="filterTodos" name="filterTodos"
          class="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </form>
    </div>
    <div class="grow">
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Todos</h2>
      <ul class="text-left max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <li class="mb-2" v-for="(todo, id) in store.filteredTodos" :key="todo.id">
          <span :class="[todo.completed ? 'completed__todo' : '']" class="font-semibold text-gray-900 dark:text-white">{{
            todo.item }}</span>
          <button type="button" @click.prevent="store.completeTodo(todo.id)"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 py-2.5 ml-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{{
              todo.completed ? 'Undo' : 'Complete' }}</button>
          <button type="button" @click.prevent="store.deleteTodo(todo.id)" class=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 py-2.5 ml-2
            focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700
            dark:focus:ring-purple-900">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useTodo } from './stores/useTodo';
export default {
  name: 'TodoApp',
  setup() {
    const store = useTodo();

    return {
      store
    }
  }
}


</script>

<style scoped>
.layout {
  width: 100%;

  display: flex;
}

.grow {

  flex-grow: 1;
}

.completed__todo {
  color: green;
  text-decoration: line-through;
}
</style>
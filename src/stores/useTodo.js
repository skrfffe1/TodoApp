import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
  state() {
    return {
      todoInput: "",
      filterTodo: "All",
      todos: [
        { id: 1, item: "Learn Pinia", completed: false },
        { id: 2, item: "Learn Options API", completed: false },
        { id: 3, item: "Learn Vue 3", completed: false },
      ],
    };
  },
  getters: {
    filteredTodos() {
      const completedTodos = this.todos.filter((todo) => todo.completed);
      const incompleteTodos = this.todos.filter((todo) => !todo.completed);

      if (this.filterTodo === "All") return this.todos;
      if (this.filterTodo === "Completed") return completedTodos;
      if (this.filterTodo === "Incomplete") return incompleteTodos;
    },
  },
  actions: {
    addTodo() {
      let newTodo = {
        id: this.todos[this.todos.length - 1].id + 1,
        item: this.todoInput,
        completed: false,
      };

      this.todos.push(newTodo);

      this.todoInput = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    completeTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
});

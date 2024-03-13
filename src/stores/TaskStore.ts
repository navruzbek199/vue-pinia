import { TaskInterface } from "../models/task.interface";
import { defineStore } from "pinia";
import axios from "axios";

export type TaskCompleted = {
  completed: boolean;
};
export interface TaskArray {
  task: TaskInterface[];
  loading?: boolean;
}
export const useTaskStore = defineStore("tasks", {
  state: (): TaskArray => ({
    task: [],
    loading: false,
  }),
  getters: {
    favs(): TaskInterface[] {
      return this.task.filter((t: TaskInterface) => t.completed);
    },
    favsCount(): {} {
      return this.task.reduce((a: number, b: TaskCompleted): number => {
        return b.completed ? a + 1 : a;
      }, 0);
    },
    totalCount: (state): TaskInterface[] | number => {
      return state.task.length;
    },
  },
  actions: {
    async getTask() {
      this.loading = true;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const taskData = response.data;
      this.task = taskData;
      this.loading = false;
    },
    async addTask(tasks: TaskInterface) {
      this.task.push(tasks);
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
        {
          method: "POST",
          body: JSON.stringify(tasks),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        console.log(res.ok, "post");
      }
    },
    async deletedTask(id: number) {
      this.task = this.task.filter((t: TaskInterface) => {
        return t.id != id;
      });
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id,
        {
          method: "DELETE",
        }
      );
      console.log(res, "response");
    },
    async toggleFav(id: number) {
      const _task = this.task.find((t: TaskInterface) => t.id === id);
      if (_task) {
        _task.completed = !_task.completed;
        await axios
          .patch("https://jsonplaceholder.typicode.com/todos/" + id, {
            body: JSON.stringify({ completed: _task.completed }),
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response?.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
});

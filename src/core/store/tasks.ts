import { TaskApi } from './../types/types';
import { ApiGetTasks } from './../api';
import { makeAutoObservable } from 'mobx';
import axios, { AxiosResponse } from 'axios';
import $api from '../../utils/axios';
class TasksStore {
   tasks: TaskApi[] = []
   constructor() {
      makeAutoObservable(this)
   }

   fetchTasks = async () => {
      try {
         const { data } = await $api.get<TaskApi[]>('/tasks')
         console.log('data', data)
         this.tasks = data.map(task => {
            return { ...task, id: task.id.toString() }
         })
      } catch (error) {
         if (axios.isAxiosError(error)) {
            console.log(`axios error ${error}`)
         } else {
            console.log(`unexpected errow ${error}`)
         }
      }
   }

   setTasks = (cards: TaskApi[]) => {
      this.tasks = cards;
   };
}

export const tasksStore = new TasksStore();
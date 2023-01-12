import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import $api from '../../utils/axios';

import { TaskApi } from './../types/types';
class TasksStore {
  tasks: TaskApi[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    try {
      const { data } = await $api.get<TaskApi[]>('/tasks');
      console.log('data', data);
      this.tasks = data;
    } catch (error) {
      // eslint-disable-next-line import/no-named-as-default-member
      if (axios.isAxiosError(error)) {
        console.log(`axios error ${error}`);
      } else {
        console.log(`unexpected errow ${error}`);
      }
    }
  };

  setTasks = (cards: TaskApi[]) => {
    this.tasks = cards;
  };
}

export const tasksStore = new TasksStore();
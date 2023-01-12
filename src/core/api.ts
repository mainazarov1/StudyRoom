import axios from 'axios';

import { TaskApi } from './types/types';


interface GetTasksResponse {
   data: TaskApi[]
}

export const ApiGetTasks = async () => {
  try {
    const { data, status } = await axios.get<GetTasksResponse>(
      'localhost:3000/tasks'
    );
    console.log(JSON.stringify(data, null, 4));
    console.log(`response status ${status}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
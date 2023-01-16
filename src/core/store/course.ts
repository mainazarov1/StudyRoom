/* eslint-disable camelcase */
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import $api from '../../utils/axios';

import { Course } from './../types/types';

// {
//   "user": {
//     "display_name": "Beks2",
//       "email": "beks2@gmail.com",
//         "password": "$2b$10$KldiOu8QO0SUyubsvko9tOH/670X.9BPLPS41mzFf90q8sVfoVRai",
//           "access_token": null,
//             "image": null,
//               "id": 32,
//                 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImRpc3BsYXlfbmFtZSI6IkJla3MyIiwiZW1haWwiOiJiZWtzMkBnbWFpbC5jb20iLCJpYXQiOjE2NzM4NDU2NzR9.96WuGMM_OJlEYGPU_Mjb214KaDWyn2rJfPOhFIX9DvM"
//   }
// }

class CourseStore {
  // user: User
  constructor() {
    makeAutoObservable(this);
  }

  getAllCourses = async () => {
    try {
      const { data } = await $api.get('/courses/all');
      console.log('data', data);
      // this.user = data;
    } catch (error) {
      // eslint-disable-next-line import/no-named-as-default-member
      if (axios.isAxiosError(error)) {
        console.log(`axios error ${error}`);
      } else {
        console.log(`unexpected errow ${error}`);
      }
    }
  };

}

export const courseStore = new CourseStore();
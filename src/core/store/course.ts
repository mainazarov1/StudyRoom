/* eslint-disable camelcase */
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import $api from '../../utils/axios';

import { Course } from './../types/types';

// "user": {
//    "display_name": "bekjan4",
//       "email": "bekjan4@gmail.com",
//          "password": "$2b$10$ZPhFpHtDY8qAg6PjteCYXu1JOuBH.wBq3WT8ONj1NL8JDbs1HzECe",
//             "access_token": null,
//                "image": null,
//                   "id": 28,
//                      "token":
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImRpc3BsYXlfbmFtZSI6ImJla2phbjQiLCJlbWFpbCI6ImJla2phbjRAZ21haWwuY29tIiwiaWF0IjoxNjczMzMzMDY3fQ.Jz8ta6Y16EJ82J7h8nPW2_0W5crpkNqsLV3-fZcBmBs"
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
/* eslint-disable camelcase */
import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import $api from '../../utils/axios';

import { User } from './../types/types';
class RegistrStore {
  // user: User
  constructor() {
    makeAutoObservable(this);
  }

  registerUser = async () => {
    try {
      const { data } = await $api.post<User>('/user/register', {
        display_name: 'bekjan3',
        email: 'bekjan3@gmail.com',
        password: '123456789'
      });
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

export const registrStore = new RegistrStore();
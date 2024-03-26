import { defineStore } from 'pinia';
import { ILoginInfo } from './../models/auth.interface';
import request from '../utils/request';
import { getAccessToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '../utils/cookies';


interface UserState {
    token?: string;
    user: null;
    menu: [];
    loading: boolean;
  }
export const useUsersStore = defineStore("users", {
    state: (): UserState => ({
      token: getAccessToken() || "",
      user: null,
      menu: [],
      loading: false,
    }),
    actions: {
      async login(loginInfo: ILoginInfo) {
        const response = await request.post("/auth/login", loginInfo);
        console.log(response, "response");
        
        // this.token = response.access_token;
        // setAccessToken(response.access_token);
        // setRefreshToken(response.refresh_token);
      },
      resetToken() {
        removeAccessToken();
        removeRefreshToken();
        this.token = "";
        this.user = null;
        this.menu = [];
      },
    },
    
    getters: {}
  });
  
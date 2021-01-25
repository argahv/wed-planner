import axios from "axios";
import Qs from "query-string";

// export const BASE_URL = "http://192.168.1.129:8080";

export const BASE_URL = "http://192.168.1.92:8080";
// export const BASE_URL = "http://192.168.1.181:8080";
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
  },
});

export const loginPost = (data) => api.post("/api/login", data);

export const logoutGet = () => api.get("/api/logout");
export const registerGuest = (data) => api.post("/api/register", data);

export const forgotPasswordPost = (data) =>
  api.post("api/v1/app/forgot-password", data);
export const changePasswordPost = (data) =>
  api.post("api/v1/app/change-password", data);

// ///////// User related API ////////////////
export const userDetailGet = () => api.get(`/api/current_user`);

// RSVP///

// CREATE//
export const updateRSVP = (data) => api.post(`/api/rsvpUpdate`, { data });
export const rsvpGet = () => api.get(`/api/rsvpGet`);

// Schedule

export const scheduleGet = () => api.get(`/api/scheduleGet`);
export const scheduleCreate = () => api.get(`/api/scheduleCreate`);

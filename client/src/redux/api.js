import axios from "axios";


const API =axios.create({baseURL:"http://localhost:5000"});
// connecting backend

export const signIn=(FormData)=>API.post("/users/signin",FormData);
export const signUp=(FormData)=>API.post("/users/signup",FormData);
export const googleSignIn=(result)=>API.post("/users/googleSignIn",result);
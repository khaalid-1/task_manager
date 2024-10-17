 import { create } from "zustand";

 export const useTaskStore = create((set)=> ({
    tasks :[],
    setTask :(task)=> set({task}),
    getTasks: async()=>{
        const res = await  fetch("/api/v1/tasks");
        const data = await res.json();

        set({tasks:data.data})
    },

 }))
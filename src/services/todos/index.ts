import axiosInstance from "@/lib/axios";
import { ResponseModel } from "@/models/axios";
import { Todo, Todos } from "@/models/todos";

export const getTodos = () => axiosInstance.get<ResponseModel<Todos>>("todos");

export const getTodo = (id: number) => axiosInstance.get<ResponseModel<Todo>>(`todos/${id}`)
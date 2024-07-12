import axiosInstance from "@/lib/axios";
import { ResponseModel } from "@/models/axios";
import { Todo, Todos } from "@/models/todos";
import { WithRequired } from "@/models/utilTypes";

export const getTodos = () => axiosInstance.get<ResponseModel<Todos>>("todos");

export const getTodo = (id: number) => axiosInstance.get<ResponseModel<Todo>>(`todos/${id}`)

export const updateTodo = (todoNewData: WithRequired<Partial<Todo>,"id">) => axiosInstance.put<ResponseModel<Todo>>(`todos/${todoNewData.id}`, todoNewData)
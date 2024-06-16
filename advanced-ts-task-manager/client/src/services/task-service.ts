import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as types from "../types/index";
import { LogMethod } from "../decorators/log";

const API_URL = "/api/tasks";
const API_FILTERED_URL = "/api/filtered";

type DefaultResponse = { message: string };
type TasksResponse = { tasks: types.Task[] };

export class TaskService {
  // ts. Универсальный обработчик запросов
  private async request<T, D = any>(
    method: (
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ) => Promise<AxiosResponse<T>>,
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await method(url, data, config);
      return response.data;
    } catch (error) {
      console.error("Request failed:", error);
      throw new Error("Request failed");
    }
  }
  @LogMethod
  async getAllTasks(): Promise<TasksResponse> {
    return this.request<TasksResponse>(axios.get, API_URL);
  }

  @LogMethod
  async addTask(task: types.NewTask): Promise<DefaultResponse> {
    return this.request<DefaultResponse>(axios.post, API_URL, task);
  }

  @LogMethod
  async deleteTask(id: number): Promise<DefaultResponse> {
    return this.request<DefaultResponse>(axios.delete, `${API_URL}/${id}`);
  }

  @LogMethod
  async updateTask(task: types.Task): Promise<DefaultResponse> {
    return this.request<DefaultResponse>(axios.put, API_URL, task);
  }
  
  @LogMethod
  async getFilteredTasks(status: types.Task["status"]): Promise<TasksResponse> {
    return this.request<TasksResponse>(axios.post, API_FILTERED_URL, {
      status,
    });
  }
}

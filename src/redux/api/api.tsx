import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseAPI = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {

        const params =new URLSearchParams()
        if (priority){
          params.append("priority", priority)
        }
        return {
          url: `/task`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    addTodos: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodos: builder.mutation({
      query: (options) => {
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});
export const { useGetTodosQuery, useAddTodosMutation ,useUpdateTodosMutation} = baseAPI;

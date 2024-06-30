import { CSSProperties, useState } from "react";
import { TTodo } from "@/redux/features/todoSlice";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import ToduCard from "./ToduCard";
import { useGetTodosQuery } from "@/redux/api/api";
import { ClipLoader } from "react-spinners";
//import { useAppSelector } from "@/redux/hook";


const ToduContainer = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: (`bg-gradient-primary`)
  };
//*from here on local state := local
 //const {todos} = useAppSelector((state) => state.todos)
//from here on server state := server :

const [priority,setPriority] =useState('')
const{data:todos ,isLoading,isError} = useGetTodosQuery(priority);

if (isLoading) {
  return <ClipLoader
  loading={isLoading}
  cssOverride={override}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>;
}

if (isError) {
  return <p>Something went wrong...</p>;
}


  return (
    <div>
      <div className="flex justify-between mb-3">
      <AddTodoModal/>
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full rounded-md p-5 space-y-3">
      <div className="bg-white w-full h-full rounded-md p-2 space-y-2">
        {
          todos?.data?.map((item :TTodo) => (
            <ToduCard{...item} />
          ))
        }
        </div>
        {/* <div className="border-2 border-rose-200 p-6 rounded-md">
            <p className="font-semibold text-2xl text-center text-blue-400">There is no tasks pending...</p>
        </div> */}
      </div>
    </div>
  );
};

export default ToduContainer;

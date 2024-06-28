
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import ToduCard from "./ToduCard";

const ToduContainer = () => {

  const {todos} = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className="flex justify-between mb-3">
      <AddTodoModal/>
        <TodoFilter/>
      </div>
      <div className="bg-primary-gradient w-full rounded-md p-5 space-y-3">
      <div className="bg-white w-full h-full rounded-md p-2 space-y-2">
        {
          todos.map((items) => (
            <ToduCard {...items} />
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

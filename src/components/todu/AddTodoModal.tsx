import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodos } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const AddTodoModal = () => {
  //local state change data :
  //const dispacth = useAppDispatch();

  //server state change data:
  const [addTodos, { data, isLoading, isSuccess, isError }] =
    useAddTodosMutation();
  console.log({ isLoading, isSuccess, isError, data });
  const [tasks, setTasks] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const tasksDetails = {
      title: tasks,
      description,
      iscomplete: false,
      priority
    };

    //local state change data:
    //dispacth(addTodos(tasksDetails));
    console.log('inside addTodos' ,tasksDetails);
    addTodos(tasksDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-white">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-2 border-t-slate-500 p-4">
        <DialogHeader>
          <DialogTitle>Make a Tasks:</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tasks" className="text-right">
              tasks
            </Label>
            <Input
              onBlur={(e) => setTasks(e.target.value)}
              id="tasks"
              name="tasks"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">priority</Label>
            <Select onValueChange={(value)=>setPriority(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a tasks" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>tasks</SelectLabel>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;

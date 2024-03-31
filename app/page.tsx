import InputField from "@/components/InputField";
import { getTask } from "./action";
import TaskMapping from "@/components/TaskMapping";

export interface Task {
  id: number;
  content: string;
}

export default async function Home() {
  const tasks: Task[] = await getTask("http://127.0.0.1:8000/todos");
  return (
    <main className="text-center">
      <h1 className="text-6xl font-bold mt-16 p-4">
        <span className="text-red-600">Todos-Task List</span>
        <span className="text-blue-900">( Nextjs + FastAPI )</span> by{" "}
        <span className="text-green-600">Ahmad Bilal</span>
      </h1>
      <div className="flex items-center justify-center mt-5 text-xl">
        <InputField />
      </div>
      <div
        className="grid grid-cols-6 text-xl font-bold 
      justify-between items-center p-4 gap-8 mt-8"
      >
        <TaskMapping tasks={tasks} />
      </div>
    </main>
  );
}

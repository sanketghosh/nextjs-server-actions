import TodoCard from "@/components/TodoCard";

const todo_items: string[] = ["React tutorials"];

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;
    todo_items.push(todo);
  }

  return (
    <main className="max-w-2xl mx-auto font-poppins">
      <div className="px-3 py-4">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-center py-5 select-none">
          Todo.fyi
        </h1>
        <form
          className="w-full flex items-center gap-1.5 py-4"
          action={addTodo}
        >
          <input
            type="text"
            name="todo"
            placeholder="Enter your todo"
            className="px-3 py-4 rounded-md text-xs lg:text-sm flex-1 placeholder:text-sm placeholder:text-gray-400 outline-none bg-gray-800 border-1 border-gray-700 border-opacity-50"
          />
          <button
            type="submit"
            className="bg-purple-600 px-3 py-4 rounded-md hover:bg-opacity-90 transition text-xs lg:text-sm font-medium"
          >
            <p className="">Add Todo</p>
          </button>
        </form>
        <div className="py-5 flex flex-col gap-4 h-[33rem] overflow-y-scroll">
          {todo_items.map((todo, idx) => (
            <TodoCard key={idx} text={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}

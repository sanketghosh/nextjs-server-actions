import { FaTrash, FaCheckCircle } from "react-icons/fa";

type TodoCardPropsType = {
  text: string;
};

export default function TodoCard({ text }: TodoCardPropsType) {
  return (
    <div className="w-full bg-gray-800 px-3 py-4 rounded-md shadow-md shadow-gray-900 text-xs md:text-sm flex items-center justify-between">
      <p className="md:mr-3">{text}</p>
      <div className="flex items-center gap-5 text-xl md:text-2xl">
        <FaCheckCircle className="cursor-pointer text-green-500 hover:text-opacity-90" />
        <FaTrash className="cursor-pointer text-rose-500 hover:text-opacity-90" />
      </div>
    </div>
  );
}

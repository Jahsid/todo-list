import { ThemeProvider } from "@/components/theme-provider";
import { Input } from "./components/ui/input";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
import {
  ChevronDown,
  Moon,
  Pencil,
  Plus,
  Search,
  Sun,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

function App({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { text: "Read recommended book again", completed: false },
    { text: "Vacation planning", completed: false },
    { text: "Cook dinner", completed: false },
    { text: "Sign up for training", completed: false },
  ]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ThemeProvider
      defaultTheme={isDarkMode ? "dark" : "light"}
      storageKey="vite-ui-theme"
    >
      {children}
      <div
        className={`h-screen p-5 transition-colors ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto w-[800px]">
          <h1 className="text-center text-xl font-bold mb-4">TODO LIST</h1>
          <div className="flex items-center mb-6">
            <div className="relative flex items-center mr-2 w-full">
              <Search className="absolute text-indigo-500 m-2" />
              <Input
                placeholder="Search note..."
                className="border-indigo-500 px-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="default"
                  className="px-4 bg-indigo-500 hover:bg-indigo-600"
                >
                  <span className="mr-2">ALL</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`transition-colors ${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Complete</DropdownMenuItem>
                <DropdownMenuItem>Incomplete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              size="icon"
              className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>
          </div>

          <div className="mx-40">
          {tasks.map((task, index) => (
            <div key={index}>
              <div className="flex items-center justify-between space-x-2 py-4">
                <div className="flex items-center">
                  <Checkbox
                    id={`task-${index + 1}`}
                    className="border-indigo-500 mr-2"
                    checked={task.completed} 
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  <label
                    htmlFor={`task-${index + 1}`}
                    className={`text-sm font-bold ${task.completed ? "line-through text-gray-500" : ""}`}
                  >
                    {task.text}
                  </label>
                </div>
                <div className="flex gap-2">
                  <Pencil size={16} className="hover:text-indigo-500" />
                  <Trash2 size={16} className="hover:text-red-600" />
                </div>
              </div>
              {index < tasks.length - 1 && <hr className="border-indigo-500" />}
            </div>
          ))}
        </div>

          <div className="flex justify-end mt-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg absolute bottom-5"
                >
                  <Plus />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[500px] bg-white rounded-lg shadow-lg m-0 p-5">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center font-bold">
                    NEW NOTE
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <Input
                  placeholder="Input your note.."
                  className="border border-indigo-500 focus:ring-indigo-500 focus:border-indigo-600 rounded w-full mb-20"
                />
                <AlertDialogFooter>
                  <div className="flex justify-between w-full">
                    <AlertDialogCancel className="bg-white text-indigo-500 hover:text-indigo-600 border border-indigo-500 rounded">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-indigo-500 text-white hover:bg-indigo-600 rounded">
                      Apply
                    </AlertDialogAction>
                  </div>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            ;
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

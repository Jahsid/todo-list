import { ThemeProvider } from "@/components/theme-provider";
import { Input } from "./components/ui/input";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
import { Moon, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
      <div className="container m-auto w-[600px] h-screen mt-10 p-5">
        <h1 className="text-center text-xl font-semibold mb-4">TODO LIST</h1>
        <div className="flex items-center mb-6">
          <Input placeholder="Search note..." className="flex-1 mr-2 border-indigo-500" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="default" className="px-4 bg-indigo-500">
                ALL
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>ALL</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon" className="ml-2 bg-indigo-500 text-white">
            <Moon />
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
          <Checkbox id="task-1" className="border-indigo-500" />
          <label htmlFor="task-1" className="pl-2 text-sm font-bold">Read recommended book again</label>
          </div>
          <hr className="border-indigo-500"/>
          <div className="flex items-center">
          <Checkbox id="task-2" className="border-indigo-500"/>
          <label htmlFor="task-2" className="pl-2 text-sm font-bold">Vacation planning</label>
          </div>
          <hr className="border-indigo-500"/>
          <div className="flex items-center">
          <Checkbox id="task-3" className="border-indigo-500"/>
          <label htmlFor="task-3" className="pl-2 text-sm font-bold">Cook dinner</label>
          </div>
          <hr className="border-indigo-500"/>
          <div className="flex items-center">
          <Checkbox id="task-4" className="border-indigo-500"/>
          <label htmlFor="task-4" className="pl-2 text-sm font-bold">Sign up for training</label>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button variant="outline" size="icon" className="bg-indigo-500 text-white rounded-full shadow-lg absolute bottom-5">
            <Plus />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

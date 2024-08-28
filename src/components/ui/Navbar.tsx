import { Download, Menu } from "lucide-react";
import { Button } from "./button";
import CustomMenu from "./CustomMenu";

const buttons: string[] = ["Home", "Projects", "Resume"];

export default function Navbar() {
  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden sticky top-0 bg-inherit border-b p-4 text-white lg:flex justify-between">
        <div>
          <h2 className="text-3xl font-semibold font-cursive">
            Rajneesh Mishra
          </h2>
        </div>
        <div className="flex flex-row gap-2">
          {buttons.map((button, idx) => (
            <Button
              key={idx}
              variant={"outline"}
              className="flex flex-row gap-1"
            >
              {button}
              {button === "Resume" && <Download size={18} />}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden sticky top-0 bg-inherit border-b p-4 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold font-cursive">
            Rajneesh Mishra
          </h2>
        </div>
          <CustomMenu />
      </div>
    </nav>
  );
}

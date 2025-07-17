import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

function Navbar() {
  const Navigate = useNavigate();

  const onClickBuildMyResume = () => {
    Navigate("/cv-builder/personal-details");
  };
  return (
    <nav className="flex justify-between items-center h-20 px-20">
      <NavLink to="/">
        <img src={Logo} alt="" className="w-30 p-0 m-0" />
      </NavLink>
      <div className="flex items-center gap-20 font-bold text-2xl">
        <NavLink to="/cv-builder/templates" className="hover:text-green-500">
          <p>Templates</p>
        </NavLink>
        <NavLink to={"/cv-builder/contact"} className="hover:text-green-500">
          <p>Contact</p>
        </NavLink>
        <Button
          variant={"default"}
          className="bg-green-500 h-12 cursor-pointer text-md font-bold transition active:scale-95 hover:bg-green-400"
          onClick={onClickBuildMyResume}
        >
          Create Resume
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

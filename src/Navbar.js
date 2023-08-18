import Button from "./jsxComponents/Button";
import Navlist from "./jsxComponents/Navlist";
import Search from "./jsxComponents/Search";
import Logo from './assets/index.png'
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return ( 
        <nav className="bg-white" >
            <div className="flex   items-center justify-around ">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={Logo} alt="logo " className="md:cusor-pointer h-9"></img>
                    <div className="text-3xl" onClick = {() => {setOpen(!open)}}> 
                    <ion-icon name={`${open ? "close" : "menu"}`} ></ion-icon>
                    </div>
                </div>
                <div className="md:flex hidden">
                <Search />
                </div>         
                <ul className="md:flex hidden uppercase items-center gap-8">                     
                    <Navlist paddin="py-3 px-3" />
                </ul>
                    <div className="md:block hidden">
                        <Button title='Get Started'/>
                        <Button title='John Does'/>
                    </div>
                    {/* Mobile Version Navigation  */}
                        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4  duration-500 ${open? 'left-0': 'left-[-100%]' }`}>     
                             
                                <Navlist paddin="py-7 px-3 "/>   
                            <div className="py-5">
                                <Button title='Get Started'/>
                            </div>
                        </ul> 
            </div>
        </nav>
     );
}
 
export default Navbar;


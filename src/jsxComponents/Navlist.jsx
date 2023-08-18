import { Link } from "react-router-dom";

const Navlist = ({paddin}) => {

    const links =[ 
        {name: 'home', id: 1, link: '/'},
        { name : 'Sign Up', id: 2, link: 'register'},
         {name: 'Generate Form', id: 3, link: 'generate', submenu: true, sublink: [
           {
                top: 'Forms',
                sublinks: [
                       { name: "Consent Form", link: '/'},
                       {name: 'Agreement Form', link: '/'},
                       { name: "Tenacy Form", link: '/'},
                       { name: "Consent Form", link: '/'},
                ]
           }
         ]}, 
 ]
    
    return  <>
    {
   
            links.map((link) => (
                //disable 
                        <div className={paddin+'px-3 text-lef md:cursor-pointer'}  key={link.id}>
                                <Link to={link.link} ><li>{link.name}</li></Link>
                        </div>
                )) 
    
            }
            </>
}
 
export default Navlist;
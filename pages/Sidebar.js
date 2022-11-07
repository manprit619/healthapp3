import classNames from 'classnames'
import React, { useState, useMemo } from 'react'
import LogoIcon from './icons/LogoIcon'
import CollapsIcon from './icons/CollapsIcon'
import HomeIcon from './icons/HomeIcon'
import ArticleIcon from './icons/ArticleIcon'
import UsersIcon from './icons/UsersIcon'
import CameraIcon from './icons/CameraIcon'
import LogoutIcon from './icons/LogoutIcon'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../pages/icons/logo.jpg'


//import { MdLocalHospital } from 'react-icons/md';

import auth from "../firebase"
import { useAuthState} from "react-firebase-hooks/auth"


const menuItems = [
    { id: 1, label: "Home", icon: HomeIcon, link: "/home" },
    { id: 2, label: "Disease", icon: ArticleIcon, link: "/disease" },
    { id: 3, label: "Services", icon: UsersIcon, link: "/services" },
    { id: 4, label: "Camera", icon: CameraIcon, link: "/cloud" },
  ];

const Sidebar = () => {


  const [user, loading] = useAuthState(auth)
  const userName = user?.displayName


  const sendToLoginPage = () => {
   router.push("/Login")
  }

  const router = useRouter();

    const [toggleCollapse, setToggleCollapse] = useState(true)

    const [isCollapsible, setIsCollapsible] = useState(false);

   

    const activeMenu = useMemo(
      () => menuItems.find((menu) => menu.link === router.pathname),
      [router.pathname]
    );
  
    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light-lighter justify-between flex-col ",
        {
           ["w-80"]: !toggleCollapse, 
           ["w-20"]: toggleCollapse, 
        }
        
        )

        const collapseIconClasses = classNames(
            "p-4 rounded bg-light-lighter absolute right-0",
            {
              "rotate-180": toggleCollapse,
            }
          );
          
          const onMouseOver = () => {
            setIsCollapsible(!isCollapsible);
          };

          const handleSidebarToggle = () => {
            setToggleCollapse(!toggleCollapse);
          };

          const getNavItemClasses = (menu) => {
            return classNames(
              "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
              {
                ["bg-light-lighter"]: activeMenu === menu,
              }
);
          };

        
     


  return (
    <div className={wrapperClasses} onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOver} 
    style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
    
   <div className="flex flex-col">
   <div className="flex items-center justify-between relative">

   <div className="flex items-center pl-1 gap-4">
   {/* <LogoIcon /> */}
    <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              {/* HealthApp Logo    */}
              {/* <img src="./icons/logo.jpg"/> */}
              <Image src={logo} height={100} width={150}/>

            </span>

    </div>
    {isCollapsible && (
<button  className={collapseIconClasses} onClick={handleSidebarToggle}
              >

     <CollapsIcon  />
</button>
)}
   </div>
<div  className="flex flex-col items-start mt-24">
{menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);

return (
<div className={classes}>

{/* {menu.label} */}
<Link legacyBehavior href={menu.link}>
<a className="flex py-4 px-3 items-center w-full h-full">
<div style={{width: "2.5rem"}}>
<Icon />

</div>
{!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}

</a>

</Link>

</div>

)


})}

</div>




   </div>
   <div className={`${getNavItemClasses({})} px-3 py-28`}>


   <div style={{width: "2.5rem"}}>  {userName}
  <p onClick={() => router.push('/Login')} >logout here</p>  
  <LogoutIcon />

 
   </div>
  
{!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                    </span>
                    )}

   </div >
   <div> 


  </div>
 
   </div >

  )
}

export default Sidebar
import { Menu } from "@/types/menu";


const menuData:Menu[]=[
    {
        id:1,
        title:"Home",
        path:"/",
        newTab:false
    },
    {
        id:1,
        title:"About",
        path:"/",
        newTab:false
    },
    {
        id:1,
        title:"Shop",
        path:"/",
        newTab:false
    },    {
        id:2,
        title:"Pages",
         newTab:false,
         submenu:[
            {
                id:44,
                title:"Pages",
                path:"/about",
                newTab:false
            }
         ]
    },
    {
        id:1,
        title:"Contact",
        path:"/contact",
        newTab:false
    }

]


export default menuData
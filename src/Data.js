import tour1 from './images/tour-1.jpeg'
import { FaTwitter,FaFacebook,FaSquarespace,FaWallet,FaTree,FaSocks } from "react-icons/fa6";
export const pageLinks =[
    {id:'1' ,link:'/', text:'home'},
    {id:'1' ,link:'/about', text:'about'},
    {id:'1' ,link:'/services', text:'services'},
    {id:'1' ,link:'/tours', text:'tours'}
]

export const socialLinks=[
    {id:'1', href:'https://www.facebook.com', icon:<FaTwitter/>},

    {id:'2', href:'https://www.facebook.com', icon:<FaFacebook/>}, 

    {id:'3', href:'https://www.facebook.com', icon:<FaSquarespace/>}  
    
]

export const service =[
   { id:'1',
    icon:<FaWallet/>,
    title:'Saving Money',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores,officia'},
    { id:'2',
    icon:<FaTree/>,
    title:'amazing comfort',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores,officia'},
    { id:'3',
    icon:<FaSocks/>,
    title:'endlss hiking',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores,officia'}
]

export const tour=[
    {id:1,
        Image:tour1,
     date:'august 26th,2023',
     title:'Tibel Adventure',
     info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
     location:'Ghana',
     duration:6,
     cost:21,
    },
    {id:2,
        Image:tour1,
        date:'september 15th,2023',
        title:'Kakum National Park',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Ghana',
        duration:11,
        cost:21,
       },
       {id:3,
        Image:tour1,
        date:'september 15th,2023',
        title:'Kakum National Park',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Ghana',
        duration:11,
        cost:21,
       },
]
import { LuCrown , LuClock , LuPhone } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";


export const points = [
    {
        id:1,
        SVG:<LuCrown />,
        heading:"Excellent Quality",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus tenetur dolores doloremque minima reprehenderit dolorem earum eum consequuntur nesciunt.'
    },
        {
        id:2,
        SVG:<LuClock />,
        heading:"Fast & Efficient Support",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus tenetur dolores doloremque minima reprehenderit dolorem earum eum consequuntur nesciunt.'
    },
    {
        id:3,
        SVG:<SlBadge />,
        heading:"International Standard",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus tenetur dolores doloremque minima reprehenderit dolorem earum eum consequuntur nesciunt.'
    },
    {
        id:4,
        SVG:<LiaShippingFastSolid />,
        heading:"Shipping & Delivery",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus tenetur dolores doloremque minima reprehenderit dolorem earum eum consequuntur nesciunt.'
    },
]
export const contactLinks = [
    {
        id:1,
        SVG:<FaLocationDot />,
        title: "320 Urban Ave, Hyde Park, Sandton, 2196",
        href: "/"
    },
    {
        id:2,
        SVG:<IoMailOutline />,
        title: "hello@ArtisanHaus.com",
        href: "/"
    },
    {
        id:3,
        SVG:<LuPhone />,
        title: "(+27)114559000",
        href: "/"
    },
]
import image1 from "../assets/magia.png";
import image2 from "../assets/Macros.png";
import image3 from "../assets/almotawakel.png";
import image4 from "../assets/Ecommerce.png";
import image5 from "../assets/waSender.png";
import image6 from "../assets/games.png";
import image7 from "../assets/elmaram.png";

interface workData {
    image:string;
    title:string;
    url:string;
}

export const work:workData[] = [
    {
        image:image1,
        title:"Magia Blog-Plus",
        url:"https://hamdymohamedak.github.io/magia-blog/",
    },
    {
        image:image2,
        title:"AK Macros",
        url:"https://ak-macros.vercel.app/",
    },
    {
        image:image3,
        title:"Al Motawakel",
        url:"https://hamdymohamedak.github.io/Almotawakel/",
    },
    {
        image:image4,
        title:"E-commerce",
        url:"https://next-js-e-commerce-two-blush.vercel.app/",
    },
    {
        image:image5,
        title:"WASender",
        url:"https://hamdymohamedak.github.io/WasSender/",
    },
    {
        image:image6,
        title:"AK Games",
        url:"https://akgames.vercel.app/",
    },
    {
        image:image7,
        title:"AlMaram Pharmacies",
        url:"https://elmaram.vercel.app/",
    },
]
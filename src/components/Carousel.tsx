import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ReactNode } from "react";
import OwlCarousel from 'react-owl-carousel';

const Carousel = ({ children }: { children: ReactNode }) => {
    const options = {
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            1024: {
                items: 3,
            }
        },
    };
    return (
        <OwlCarousel className='owl-theme' responsiveClass={true} responsive={options.responsive} autoplay
            autoplayTimeout={3000} loop margin={20}>
            {children}
        </OwlCarousel>
    );
}

export default Carousel;

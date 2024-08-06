import "../../style/Services.css";
import ServiceDesign from "./Service.design";
import ServiceDevelopment from "./Service.development";
import ServiceHead from "./Service.head";
import ServiceStrategy from "./Service.strategy";
const Services = () => {
    return (
        <div className="services">
            <ServiceHead/>
            <ServiceStrategy />
            <ServiceDesign />
            <ServiceDevelopment />
        </div>
    );
}

export default Services;

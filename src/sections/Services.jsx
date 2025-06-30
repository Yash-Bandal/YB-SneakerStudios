import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services


// Example service[s] 
// export const services = [
//   {
//     imgURL: truckFast,
//     label: "Free shipping",
//     subtext: "Enjoy seamless shopping with our complimentary shipping service."
//   },
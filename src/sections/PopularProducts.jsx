import {products} from "../constants";
import {PopularProductsCard} from "../components";

//products is an array of 4 diff shoes


const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

 {/* Very easy to use grid with tailwind..this defines large device 4col, medium device tab 3 cols small phone 2 cols and gradually 1 */}
      <div className="mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3
      sm:grid-col-2 grid-cols-1
      sm:gap-16 gap-14">
        {products.map((product)=>(  
          <PopularProductsCard key={product.name} {...product}/> //spread everything remaining
        ))}

      </div>
    </section>
  )
}

export default PopularProducts


import {  CustomerReview,  Footer,  Hero,  PopularProducts,  Services,  SpecialOffer,  Subscribe,  SuperQuality} from "./sections";
// import  Nav  from "./components/Nav";
import  Nav  from "./components/Nav2";
import useLenis from "./hooks/useLenis";


const App = () => {

  useLenis();   // initialize smooth scrolling here

  return (
    <main className="relative">

      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
  );
};

export default App;


// import {  CustomerReview,  Footer,  Hero,  PopularProducts,  Services,  SpecialOffer,  Subscribe,  SuperQuality} from "./sections";
// // import  Nav  from "./components/Nav";
// import  Nav  from "./components/Nav2";
// import useLenis from "./hooks/useLenis";


// const App = () =>   (
  

//   <main className="relative">

//     <Nav/>
//     <section className='xl:padding-l wide:padding-r padding-b'>
//     {/* <section > */}
//       <Hero/> 
//     </section>

//     <section className="padding">
//       <PopularProducts/> 
//     </section>

//     <section className="padding">
//       <SuperQuality/> 
//     </section>

//     <section className="padding-x py-10">
//       <Services/>  
//     </section>

//     <section className="padding">
//       <SpecialOffer/>  
//     </section>
//     <section className="bg-pale-blue padding ">
//       <CustomerReview/>
//     </section>
//     <section className="padding-x sm:py-32 py-16 w-full">
//       <Subscribe/>
//     </section>
//     <section className="bg-black padding-x padding-t pb-8">
//       <Footer/>
//     </section>
//   </main>
// );


// export default App;
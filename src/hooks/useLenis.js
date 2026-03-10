import { useEffect } from "react";
import Lenis from "lenis";

// export default function useLenis() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1,
//       smoothWheel: true,
//     });


//       // const lenis = new Lenis({
//       //     lerp: 0.08,
//       //     wheelMultiplier: 1,
//       //     smoothWheel: true,
//       // });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);
// }


export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
}

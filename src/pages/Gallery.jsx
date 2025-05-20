import { motion, useScroll } from "motion/react"
import { useEffect, useRef } from "react";

export default function Gallery() {


  const { scrollY } = useScroll()


  const containerRef = useRef()

  useEffect(() => {
    document.title = "Galeri"
  }, [])
  

  return (
    <>

    <div className='w-full bg-black min-h-screen text-white overflow-auto'>

       


      <section className="w-full flex justify-center items-center overflow-x-hidden min-h-[200vh]">
        {/* img container */}
        <div className="w-full overflow-x-hidden fixed bottom-4 left-0">
          <motion.div ref={containerRef} style={{ x: scrollY == 0 ? 0 : -scrollY  }} className="max-w-[1200px] flex gap-x-4">
            <img className="w-[300px]" src="/images/example.jpg" alt="example" />
            <img className="w-[300px]" src="/images/example1.jpg" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
            <img className="w-[300px]" src="/images/example2.png" alt="example" />
          </motion.div>
        </div>


      </section>
    </div>

    </>
    
  )
}



import { motion, useAnimation } from "motion/react"
import { useEffect } from "react"

export default function LoaderBar({ animationCompleteCallback }) {

    const control = useAnimation()

    useEffect(() => {

        const seq = async () => {
            await control.start({
                width: "10%",
                transition: {
                    duration: 0.5
                }
            })


            await control.start({
                width: "70%",
                transition: {
                    duration: 0.5,
                    delay: 1
                }
            })


            await control.start({
                width: "100%",
                transition: {
                    duration: 0.5,
                    delay: 0.2
                }
            })

            animationCompleteCallback()
        }

        seq()
    }, [control])

  return (
    <motion.div initial={{ width: 0 }} animate={control} className="absolute left-0 top-0 bg-white z-999 h-[5px]"></motion.div>
  )
}

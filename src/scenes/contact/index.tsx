import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Lottie from "lottie-react";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;
  
    const {
      register,
      trigger,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (e: any) => {
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }
    };
  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
    >
      {/* HEADER */}
      <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>
          <span className="text-primary-500 ">Get in touch</span>
        </HText>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/8b7b7a4ba47b7e88e4d76b73dc02c34f"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 char."}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" &&
                  "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-gray-50 px-20 py-3 hover:text-white text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-500 duration-300"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>

        <motion.div
          className="relative  basis-2/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div >
            {/* <img
              className="w-full"
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
            /> */}

            {/* <Lottie animationData={animationData}/> */}
            
          </div>
        </motion.div>
      </div>

      
    </motion.div>

  </section>
);
  
}

export default Contact
import { motion } from 'framer-motion'
import { 
  FaClock,
  FaRoute,
  FaToriiGate,
 } from 'react-icons/fa'

import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import { BenefitType, Pages } from '@/shared/types'

import Benefit from './Benefit'


const benefits: Array<BenefitType> = [
  {
    icon: <FaRoute className="h-6 w-6" />,
    title: "Personalised Learning Paths",
    description:
      "Tailored to your individual goals and proficiency level, our Japanese lessons provide a customised learning path that ensures rapid progress and meaningful results. Whether you're a beginner or looking to refine your skills, our expert instructors will guide you every step of the way.",
  },
  {
    icon: <FaToriiGate className="h-6 w-6" />,
    title: "Cultural Immersion Beyond Words",
    description:
      "Immerse yourself in the rich tapestry of Japanese culture as you learn the language. Our curriculum goes beyond language proficiency, integrating cultural insights that help you understand the nuances of communication and navigate real-life scenarios with confidence.",
  },
  {
    icon: <FaClock className="h-6 w-6" />,
    title: "Flexible Learning for Busy Lives",
    description:
      "Life can be hectic, but that shouldn't hinder your language journey. With flexible scheduling options, interactive online classes, and a comprehensive library of resources, mastering Japanese becomes achievable even amidst your busy schedule. Your learning adapts to you, not the other way around.",
  },
];

const benefitMotionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (page: Pages) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id={`${Pages.Benefits}`} className="mx-auto w-5/6 min-h-full py-20 bg-white">
      <motion.div 
        onViewportEnter={() => setSelectedPage(Pages.Benefits)}
      >
        {/* Header */}
        <motion.div
          className='md:mt-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST JAPANESE LESSONS</HText>
          <p className="my-5 text-sm">
            We offer immersive Japanese language learning experiences 
            that go beyond traditional lessons. Our curriculum is designed 
            to help you achieve your language goals effortlessly. 
            We take genuine interest in the progress of each student, 
            ensuring a personalised learning journey for everyone.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className='mt-5 items-center justify-between gap-8 md:flex'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={benefitMotionVariants}
        >
          {benefits.map((benefit, index) => {
            return <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          })}
        </motion.div>

        {/* Image and Description */}
        <div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
          {/* Image */}
          <img
            className="mx-auto md:w-2/5"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    THOUSANDS OF ACTIVE MEMBERS{" "}
                    <span className="text-primary-500">EVERY DAY</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Every day, our platform is embraced by a thriving community of 
                thousands of active users. These dedicated learners come from all 
                walks of life, united by their passion for mastering Japanese. 
                Their consistent engagement and interaction create a dynamic 
                environment where learning is a daily adventure.
              </p>
              <p className="mb-5">
                As each user takes steps forward in their language journey, 
                they contribute to the collective progress of the entire community. 
                This vibrant ecosystem of active users embodies the essence of our 
                commitment to providing an effective and enriching Japanese learning experience.
              </p>

              {/* Button */}
              <div className="relative mt-16">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
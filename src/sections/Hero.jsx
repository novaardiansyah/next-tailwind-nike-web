import { motion } from 'framer-motion'
import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'
import { cn } from '../lib/utils'
import { fadeIn } from '../lib/motion'

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section id="home" className={cn('w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container')}>
      <motion.div 
        variants={fadeIn('right', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={cn('relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28')}
      >
        <p className={cn('text-xl font-montserrat text-coral-red')}>Our Summer Collection</p>
        
        <h1 className={cn('mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold')}>
          <span className={cn('xl:bg-white xl:whitespace-nowrap relative z-10 pr-10')}>The New Arrival</span>
          <br />
          <span className={cn('text-coral-red inline-block mt-3')}>Nike</span> Shoes
        </h1>

        <p className={cn('font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm')}>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className={cn('flex justify-starts items-start flex-wrap w-full mt-20 gap-16')}>
          {statistics.map((item, index) => (
            <div key={`statistics-${index}`}>
              <p className={cn('text-4xl font-palanquin font-bold')}>{item.value}</p>
              <p className={cn('leading-7 text-slate-gray font-montserrat')}>{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 'tween', 1.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={cn('relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center')}
      >
        <img src={bigShoeImage} alt="Shoe Collection" className={cn('w-[610px] h-[500px] object-contain relative z-10')} />

        <div className={cn('flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6')}>
          {shoes.map((item, index) => (
            <div key={`shoes-${index}`}>
              <ShoeCard
                imgUrl={item}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
                index={index}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
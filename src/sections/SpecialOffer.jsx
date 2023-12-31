import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { fadeIn } from '../lib/motion'

const SpecialOffer = () => {
  return (
    <section className={cn('flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container')}>
      <motion.div 
        variants={fadeIn('right', 'tween', 1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={cn('flex-1')}
      >
        <img src={offer} className={cn('height-[687px] object-contain w-full')} />
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 'tween', 1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={cn('flex flex-1 flex-col')}
      >
        <h2 className={cn('font-palanquin text-4xl capitalize font-bold lg:max-w-lg')}>
          <span className={cn('text-coral-red')}>Special</span> Offer
        </h2>

        <p className={cn('mt-4 lg:max-w-lg info-text')}>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparallable value that sets us apart.
        </p>

        <p className={cn('mt-6 lg:max-w-lg info-text')}>
          Navigate to realm of possiblities designed to fullfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        
        <div className={cn('mt-11 flex flex-wrap gap-4')}>
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" customClass="bg-white border-slate-gray text-slate-gray" />
        </div>
      </motion.div>
    </section>
  )
}

export default SpecialOffer
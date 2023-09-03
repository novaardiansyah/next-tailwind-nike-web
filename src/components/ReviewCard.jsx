import { star } from '../assets/icons'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { fadeIn } from '../lib/motion'

const ReviewCard = ({ imgURL, customerName, rating, feedback, index }) => {
  return (
    <motion.div 
      variants={fadeIn('right', 'tween', index * 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn('flex justify-center items-center flex-col')}
    >
      <img src={imgURL} alt={customerName} className={cn('rounded-full object-cover w-[120px] h-[120px]')} />
      
      <p className={cn('mt-6 max-w-sm text-center info-text')}>{feedback}</p>
      
      <div className={cn('mt-3 flex justify-center items-center gap-2.5')}>
        <img src={star} alt="rating" className={cn('object-contain m-0 w-[24px] h-[24px]')} />
        <p className={cn('text-xl font-montserrat text-slate-gray')}>({rating})</p>
      </div>

      <h3 className={cn('mt-1 font-palanquin text-3xl text-center font-bold')}>{customerName}</h3>
    </motion.div>
  )
}

export default ReviewCard

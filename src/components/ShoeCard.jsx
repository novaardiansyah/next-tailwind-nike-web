import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/motion'

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage, index }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <motion.div 
      variants={fadeIn('down', 'spring', index * 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn('border-2 rounded-xl', 
        bigShoeImage == imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'
      , 'cursor-pointer max-sm:flex-1')}
      onClick={handleClick}  
    >
      <div className={cn('flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4')}>
        <img src={imgUrl.thumbnail} alt="Shoe Collection" className={cn('w-[127px] height-[103px] object-contain')} />
      </div>
    </motion.div>
  )
}

export default ShoeCard
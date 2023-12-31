import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { fadeIn } from '../lib/motion'

const PopularProducts = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 'tween', 1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="products" 
      className={cn('max-container max-sm:mt-12')}
    >
      <div className={cn('flex flex-col justify-start gap-5')}>
        <h2 className={cn('text-4xl font-palanquin font-bold')}>
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        
        <p className={cn('lg:max-w-lg mt-2 font-montserrat text-slate-gray')}>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className={cn('mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1')}>
        {products.map((item, index) => (
          <PopularProductCard 
            key={`products-${index}`}
            {...item}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default PopularProducts
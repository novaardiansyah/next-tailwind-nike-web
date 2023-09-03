import { star } from '../assets/icons'
import { cn } from '../lib/utils'

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className={cn('flex flex-1 flex-col w-full max-sm:w-full')}>
      <img src={imgURL} alt={name} className={cn('w-[280px] h-[280px]')} />
      
      <div className={cn('mt-8 flex justify-start gap-2.5')}>
        <img src={star} alt="rating star" className={cn('w-[24px] h-[24px]')} />
        
        <p className={cn('text-xl leading-normal font-montserrat text-slate-gray')}>
          ({rating})
        </p>
      </div>

      <h3 className={cn('mt-2 text-xl leading-normal font-semibold font-palanquin')}>{name}</h3>
      <p className={cn('mt-2 font-semibold font-montserrat text-coral-red text-2xl')}>{price}</p>
    </div>
  )
}

export default PopularProductCard
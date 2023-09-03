import { star } from '../assets/icons'
import { cn } from '../lib/utils'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className={cn('flex justify-center items-center flex-col')}>
      <img src={imgURL} alt={customerName} className={cn('rounded-full object-cover w-[120px] h-[120px]')} />
      
      <p className={cn('mt-6 max-w-sm text-center info-text')}>{feedback}</p>
      
      <div className={cn('mt-3 flex justify-center items-center gap-2.5')}>
        <img src={star} alt="rating" className={cn('object-contain m-0 w-[24px] h-[24px]')} />
        <p className={cn('text-xl font-montserrat text-slate-gray')}>({rating})</p>
      </div>

      <h3 className={cn('mt-1 font-palanquin text-3xl text-center font-bold')}>{customerName}</h3>
    </div>
  )
}

export default ReviewCard

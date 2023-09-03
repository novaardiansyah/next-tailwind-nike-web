import { cn } from '../lib/utils'

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className={cn('flex-1 sm-w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16')}>
      <div className={cn('w-11 h-11 flex justify-center items-center bg-coral-red rounded-full')}>
        <img src={imgURL} alt={`${label}-image`} className={cn('w-[24px] h-[24px]')} />
      </div>

      <h3 className={cn('mt-5 font-palanquin text-3xl leading-normal font-bold')}>{label}</h3>
      <p className={cn('mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray')}>{subtext}</p>
    </div>
  )
}

export default ServiceCard

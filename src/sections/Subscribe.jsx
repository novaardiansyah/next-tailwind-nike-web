import Button from '../components/Button'
import { cn } from '../lib/utils'

const Subscribe = () => {
  return (
    <section className={cn('max-container flex justify-between items-center max-lg:flex-col gap-10')} id="contact-us">
      <h3 className={cn('text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold')}>
        Sign Up for <span className={cn('text-coral-red')}>Updates</span> & Newsletter
      </h3>

      <div className={cn('lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full')}>
        <input type="text" placeholder="subcribe@nike.com" className={cn('input')} />
        
        <div className={cn('flex max-sm:justify-end items-center max-sm:w-full')}>
          <Button label="Sign Up" customClass="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
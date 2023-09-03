import { shoe8 } from '../assets/images'
import Button from '../components/Button'
import { cn } from '../lib/utils'

const SuperQuality = () => {
  return (
    <section id="about-us" className={cn('flex justify-between items-center max-lg:flex-col gap-10 w-full max-container')}>
      <div className={cn('flex flex-1 flex-col')}>
        <h2 className={cn('font-palanquin text-4xl capitalize font-bold lg:max-w-lg')}>
          We Provide You <span className={cn('text-coral-red')}>Super Quality</span> Shoes
        </h2>

        <p className={cn('mt-4 lg:max-w-lg info-text')}>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing with unmatched quality, innovation, and a touch of elegance.
        </p>

        <p className={cn('mt-6 lg:max-w-lg info-text')}>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        
        <div className={cn('mt-11 ')}>
          <Button label="View details" />
        </div>
      </div>

      <div className={cn('flex flex-1 justify-center items-center')}>
        <img src={shoe8} alt="Shoe-8" className={cn('w-[570px] h-[522px] object-contain')} />
      </div>
    </section>
  )
}

export default SuperQuality
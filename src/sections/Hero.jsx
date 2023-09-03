import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { statistics } from '../constants'
import { cn } from '../lib/utils'

const Hero = () => {
  return (
    <section id="home" className={cn('w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container')}>
      <div className={cn('relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28')}>
        <p className={cn('text-xl font-montserrat text-coral-red')}>Our Cummer Collection</p>
        
        <h1 className={cn('mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold')}>
          <span className={cn('xl:bg-white xl:whitespace-nowrap relative z-10 pr-10')}>The New Arrival</span>
          <br />
          <span className={cn('text-coral-red inline-block mt-3')}>Nike</span>
          &nbsp;Shoes
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
      </div>

      <div>
        {/* Shoes */}
      </div>
    </section>
  )
}

export default Hero
import { cn } from '../lib/utils'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className={cn('max-container flex justify-center flex-wrap gap-9')}>
      {services.map((item, index) => (
        <ServiceCard key={`${index}-services`} {...item} />
      ))}
    </section>
  )
}

export default Services

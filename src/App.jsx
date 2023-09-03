import { cn } from './lib/utils'
import { CustomerReviews, SpecialOffer, Footer, Subscribe, Services, Hero, PopularProducts, SuperQuality } from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className={cn('relative')}>
      <Nav />
      <section className={cn('xl:padding-l wide:padding-r padding-b')}>
        <Hero />
      </section>
      <section className={cn('padding')}>
        <PopularProducts />
      </section>
      <section className={cn('padding')}>
        <SuperQuality />
      </section>
      <section className={cn('padding-x py-10')}>
        <Services />
      </section>
      <section className={cn('padding')}>
        <SpecialOffer />
      </section>
      <section className={cn('padding bg-pale-blue')}>
        <CustomerReviews />
      </section>
      <section className={cn('padding-x sm:py-32 py-16 w-full')}>
        <Subscribe />
      </section>
      <section className={cn('bg-black padding-x padding-t pb-8')}>
        <Footer />
      </section>
    </main>
  )
}

export default App
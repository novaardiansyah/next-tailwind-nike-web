import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { fadeIn } from '../lib/motion'

const Footer = () => {
  return (
    <footer className={cn('max-container')}>
      <div className={cn('flex justify-between items-start gap-20 flex-wrap max-lg:flex-col')}>
        <motion.div 
          variants={fadeIn('up', 'tween', 1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={cn('flex flex-col items-start')}
        >
          <a href="/">
            <img src={footerLogo} alt="footer-logo" className={cn('w-[150px] h-[46px]')} />
          </a>

          <p className={cn('mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm')}>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>

          <div className={cn('flex items-center gap-5 mt-8')}>
            {socialMedia.map((item, index) => (
              <div key={`socialMedia-${index}`} className={cn('flex justify-center items-center w-12 h-12 bg-white rounded-full')}>
                <img src={item.src} alt={item.alt} className={cn('w-[24px] h-[24px]')} />
              </div>
            ))}
          </div>
        </motion.div>

        <div className={cn('flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap')}>
          {footerLinks.map((item, index) => (
            <motion.div 
              variants={fadeIn('right', 'tween', index * 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              key={`footerLink-${index}`}
            >
              <h4 className={cn('text-white font-montserrat text-2xl leading-normal font-medium mb-6')}>{item.title}</h4>
              
              <ul>
                {item.links.map((link, index) => (
                  <motion.li 
                    variants={fadeIn('up', 'tween', index * 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    key={`footer-links-${index}`} 
                    className={cn('mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer')}
                  >
                    <a href={link.link}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={cn('flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center max-sm:text-left gap-6')}>
        <motion.div 
          variants={fadeIn('right', 'spring', 1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={cn('flex flex-1 justify-start items-center gap-2 font-montserrat')}
        >
          <img src={copyrightSign} alt="copyright" className={cn('w-[20px] h-[20px] rounded-full m-0')} />
          <p>Copyright {new Date().getFullYear() != '2023' ? `2023-${new Date().getFullYear()}` : '2023' } <a href="https://novaardiansyah.site" className={cn('text-coral-red/90 hover:text-coral-red')} target="_blank" rel="noreferrer">Nova Ardiansyah</a>. All rights reserved</p>
        </motion.div>

        <motion.p 
          variants={fadeIn('left', 'spring', 1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={cn('font-montserrat cursor-pointer')}
        >Terms & Conditions</motion.p>
      </div>
    </footer>
  )
}

export default Footer
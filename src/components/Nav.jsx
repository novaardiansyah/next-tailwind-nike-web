import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { cn } from '../lib/utils'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className={cn('padding-x py-8 absolute z-10 w-full')}>
      <nav className={cn('flex justify-between items-center max-container')}>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className={cn('flex-1 flex justify-center items-center gap-16 max-lg:hidden')}>
          {navLinks.map((link, index) => (
            <li 
              key={index}
              className={cn('font-montserrat leading-normal text-lg text-slate-gray')}
            >
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={cn('hidden max-lg:block')}>
          <img src={hamburger} alt="hamburger" className={cn('w-[25px] h-[25px]')} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
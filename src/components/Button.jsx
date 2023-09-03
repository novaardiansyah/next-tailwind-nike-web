import { cn } from '../lib/utils'

const Button = ({ label, iconUrl, customClass = '' }) => {
  return (
    <button className={cn('flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none bg-coral-red rounded-full text-white', customClass)}>
      {label}
      {iconUrl && (
        <img src={iconUrl} alt={label} className={cn('ml-2 rounded-full w-5 h-5')} />
      )}
    </button>
  )
}

export default Button
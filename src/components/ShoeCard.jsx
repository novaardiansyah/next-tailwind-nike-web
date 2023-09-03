import { cn } from '../lib/utils'

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <div 
      className={cn('border-2 rounded-xl', 
        bigShoeImage == imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'
      , 'cursor-pointer max-sm:flex-1')}
      onClick={handleClick}  
    >
      <div className={cn('flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4')}>
        <img src={imgUrl.thumbnail} alt="Shoe Collection" className={cn('w-[127px] height-[103px] object-contain')} />
      </div>
    </div>
  )
}

export default ShoeCard
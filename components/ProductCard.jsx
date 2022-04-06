import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className='mx-2 max-w-sm overflow-hidden rounded-md bg-white shadow-md'>
      <Image src={product.image} alt='product image' width={400} height={300} />
      <div className='px-3'>
        <h3 className='text-xl'>{product.name}</h3>
        <span className='text-sm'>{product.category}</span>
      </div>
      <div className='mb-3 flex items-center p-3'>
        <h3 className='text-md mr-auto'>${product.price}</h3>
        <button type='button' className='bg-amber-400 px-3 py-2'>
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

export default function Product({}) {
  return (
    <div
      className="w-[47%] max-w-[200px] h-[400px] gap-2 pb-2 flex  flex-col  dark:bg-bgdarksecundary bg-bglightsecundary shadow shadow-gray-500 rounded-md dark:shadow-none dark:border-[1px] dark:border-zinc-800 hover:border-primary  dark:hover:border-primary hover:border-[1px] "
      key={product.id}
    >
      <Link href={`/product/${product.slug}`} className="group ">
        {product.image && (
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.title}
            className="group-hover:scale-105  transition-transform duration-500 h-[270px]"
          />
        )}
      </Link>
      <Link href={`/product/${product.slug}`}>
        <p className=" text-center px-1">{product.title}</p>
      </Link>
      <div className="flex flex-col  md:flex-row justify-end md:items-end h-full md:justify-evenly gap-2 mx-2 items-center">
        <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>{' '}
    </div>
  )
}

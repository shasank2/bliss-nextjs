import FilterAndSort from "../all-products/FilterAndSort"

type Props = {}
const BestSelling = (props: Props) => {
  return (
    <div className='py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <h1 className='text-5xl text-center font-medium font-cera-stencil mb-4'>BEST SELLING</h1>
    <FilterAndSort />

    {/* <div className='flex flex-wrap gap-32 justify-center'>
        {productList.map((elem: any, index: number) => {
            return (
                <Link href={`/products/${elem.id}`} key={index}>
                    <ProductCard title={elem.title} desc={elem.description} price={elem.price} images={elem.images}  />
                </Link>
                // <ProductCard title={elem.title} desc={elem.description} price={elem.price} images={elem.images}  />

            )
        })}
    </div> */}
</div>
  )
}
export default BestSelling
import { IProduct } from "../Type/server"
type TProductItem= IProduct

function ProductItem({title, price, description,image}:TProductItem) {
  return (
    <div className="border w-62 rounded shadow-md border-gray-300">
        <img src={image} alt="" className="h-40 w-62 rounded-t"/>
        <div className="flex px-4 justify-between my-2">
            <h2 className="line-clamp-1 w-72 font-bold">{title}</h2>
            <p className="font-bold">{price}$</p>
        </div>
        <div className="text-right px-4 mb-2 line-clamp-2 text-gray-600">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProductItem
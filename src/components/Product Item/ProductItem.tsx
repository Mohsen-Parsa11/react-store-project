import image from "../../assets/images/img.jpg"


function ProductItem() {
  return (
    <div className="border w-62 rounded shadow-md border-gray-300">
        <img src={image} alt="" className="h-40 w-62 rounded-t"/>
        <div className="flex flex-row-reverse px-4 justify-between my-2">
            <h2>عنوان محصول</h2>
            <p>55$</p>
        </div>
        <div className="text-right px-4 mb-2 line-clamp-2">
            <p>بهترین محصول را از فروشگاه ما بدست آورید با تخفیف فوق العاده عالی</p>
        </div>
    </div>
  )
}

export default ProductItem
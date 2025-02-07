import image from "../../assets/images/img.jpg"
import Button from "../Button/Button"


function CardItem() {
  return (
      <div className="px-6 lg:px-0">
        <div className="border-b border-gray-200 pb-4 lg:flex lg:flex-row-reverse">
           <div>
           <img src={image} alt="" className="max-w-96 lg:max-w-40 mx-auto rounded"/>
           </div>
            <div className="space-y-2 lg:mr-4">
                <h2 className="text-center lg:text-right text-xl text-slate-600">عنوان محصول</h2>
                <div className="flex justify-center space-x-2">
                    <Button variant="primary" className="px-2 rounded cursor-pointer">+</Button>
                    <span>2</span>
                    <Button variant="primary" className="px-2 rounded cursor-pointer">-</Button>
                    <Button variant="danger" className="rounded px-2 cursor-pointer">Remove</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardItem
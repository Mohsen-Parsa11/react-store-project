import Button from "../Button/Button"
import CardItem from "../CardItem/CardItem"
import Container from "../Container/Container"
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext"


function Cart() {

  const {cartItems}= useShopingCartContext()
  

  return (
  <Container>
      <div className="mb-4">
      
      <div className="space-y-8 mt-8 lg:flex lg:flex-col">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <div className="px-6 lg:px-0">
        <div className="bg-gray-100 p-4 text-end">
          <p>قیمت کل: <span>2000</span></p>
          <p>تخفیف شما: <span>100</span></p>
          <p>قیمت نهایی: <span>400</span></p>
        </div>
        <Button variant="success" className="rounded mt-2 p-[4px] hover:opacity-70 cursor-pointer active:text-pink-700">ثبت سفارش</Button>
      </div>
    </div>
  </Container>
  )
}

export default Cart
import { useParams } from "react-router-dom"
import Container from "../Container/Container";
import image from "../../assets/images/img.jpg"
import Button from "../Button/Button";

function Product() {

   const params= useParams();
   
  return (
    <div>
        <Container>
            {/* desktop layout */}
            <div className="h-96 hidden shadow lg:grid lg:grid-cols-12 mt-10 rounded">
            
                <div className="col-span-8">
                    <div className="px-4 pt-6 pb-2 text-end">
                        <h2>عنوان محصول</h2>
                        <p>قیمت: $25</p>
                    </div>
                    <div className="px-4 text-end"> 
                        <p>تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین </p>
                    </div>
                </div>

                <div className="bg-blue-300 col-span-4 p-4 rounded-r">
                    <div>
                        <img src={image} alt="" className="rounded"/>
                    </div>
                    <div>
                    {/* <Button 
                    variant="success"
                    hover="text-red"
                    className="mt-3 p-1 rounded cursor-pointer hover:bg-lime-100 hover:text-red-800">
                    Add to card
                </Button> */}
                    </div>
                </div>
            </div>

            {/* mobile layout */}
            <div className="h-96 mt-10 px-4 rounded lg:hidden">
            
            <div className="bg-blue-300 p-4 rounded">
                <div>
                    <img src={image} alt="" className="rounded"/>
                </div>
                <div>
                <Button 
                variant="success"
                className="mt-2 p-1 rounded cursor-pointer"
                >
                    Add to card
                </Button>
                </div>
            </div>
            
            <div className="col-span-8">
                <div className="px-4 pt-6 pb-2 text-end">
                    <h2>عنوان محصول</h2>
                    <p>قیمت: $25</p>
                </div>
                <div className="px-4 text-end"> 
                    <p>تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین تنستبنسشتبنتسترز نتسیتنبتشنسیب نتبنسیتنتش ن زتر شسینبتسنبتسشن قتنبشستی بتشسن رنتزرطوئبتینسقتت ب شستنیبت شنم  قثتشسی  بتشتسبنتسنبشس  سشنیبتسشنتبنستب بتنترزتطن قثث صنثتقتقص  شسنتبنستیبنسش سیشتبنسیتین </p>
                </div>
            </div>

            </div>
        </Container>
    </div>
  )
}

export default Product
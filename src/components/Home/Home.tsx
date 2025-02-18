import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { getProducts } from "../Services/API";
import { IProduct } from "../Type/server";
import Footer from "../Footer/Footer";
import styled from "./home.module.css"

function Home() {
  const [product, setproduct] = useState<IProduct[]>();
  useEffect(() => {
    getProducts()
      .then((result) => {
        setproduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Carousel
        className="max-w-4xl mx-auto h-[300px] py-6 px-4 lg:px-0"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {product?.map((item:IProduct)=>(
          <div key={item.id}>
            <img src={item.image}  className="w-full h-96 lg:h-[450px] object-fill"/>
            <div>
              <p className="legend space-y-4 !opacity-50">
                <h1 className="text-2xl line-clamp-1">{item.title}</h1>
                <p className="line-clamp-2">{item.description}</p>
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* intro */}
      <div className="mt-40 lg:mt-56">
        <div id={styled.intro}>
         <div className="bg-black opacity-80 py-20 lg:py-42 px-4 lg:px-0">
         <h2 className="text-center text-2xl uppercase text-white">choose here what you want!</h2>
         <p className="text-center mt-2 font-sans lg:max-w-4xl mx-auto text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet saepe cumque aspernatur non placeat, at vitae eligendi laudantium ad modi deleniti a numquam animi dicta tempore magni aperiam quas, repudiandae aut dolorem, eos eum perspiciatis voluptatem perferendis? Reiciendis, rem accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sunt molestias voluptas, quia sequi veritatis itaque ullam magnam perspiciatis soluta accusamus odio tempora autem facilis! Vero nihil aspernatur sunt eligendi earum est sint quia delectus sed distinctio. In vero quisquam placeat dolorum mollitia inventore fugit delectus sit? Eos, corporis obcaecati.</p>
         </div>
        </div>
      </div>

      {/* carts */}
      <div className="max-w-7xl flex justify-center">
      <div className="mt-10 lg:space-y-0 max-h-auto grid lg:grid-cols-3  gap-6  ">
        <div className="shadow max-w-80 bg-white-400 p-6 rounded-xl  mx-auto">
          <h3 className="text-xl capitalize text-sky-900 text-center">tiro clothes for sport</h3>
          <p className="text-gray-400 text-center mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis! Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem corporis enim</p> 
        </div>
        <div className="shadow max-w-80 bg-white-400 p-6 rounded-xl mx-auto">
          <h3 className="text-xl capitalize text-sky-900 text-center">tiro clothes for sport</h3>
          <p className="text-gray-400 text-center mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis! Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem corporis enim</p> 
        </div>
        <div className="shadow max-w-80 bg-white-400 p-6 rounded-xl mx-auto">
          <h3 className="text-xl capitalize text-sky-900 text-center">tiro clothes for sport</h3>
          <p className="text-gray-400 text-center mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis! Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem corporis enim</p> 
        </div>
        
      </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;

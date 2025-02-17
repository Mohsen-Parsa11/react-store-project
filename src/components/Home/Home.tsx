import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Home() {
  return (
    <div>
       <Carousel className="max-w-4xl mx-auto h-[300px]" autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=add997667c1c9f65702d690d0e65dd2ef2a4365f-9065942-images-thumbs&n=13" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=add997667c1c9f65702d690d0e65dd2ef2a4365f-9065942-images-thumbs&n=13" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=add997667c1c9f65702d690d0e65dd2ef2a4365f-9065942-images-thumbs&n=13" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Home
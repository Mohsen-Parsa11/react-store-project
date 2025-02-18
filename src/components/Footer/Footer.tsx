import youtube from "../../assets/images/icons8-youtube-48.png"
import github from "../../assets/images/icons8-git-48.png"
import whatsapp from "../../assets/images/whatsapp.png"


function Footer() {
  return (
    <div className="bg-black flex justify-center lg:block text-white absolute left-0 right-0 p-6 mt-8">
        <div className="space-y-4 lg:flex justify-around">
            <div className="space-y-4">
               <h2 className="capitalize font-bold">contact:</h2>
               <p><span>Email: </span> <a href="#">mohsen@gmail.com</a></p>
               <p> <span>Phone: </span>0787045344</p>
            </div>

            <div className="space-y-4">
                <h2 className="capitalize font-bold">social media:</h2>
                <div className="flex space-x-4 py-6">
                    <a href=""><img src={github} alt="" className="w-10 h-10"/></a>
                    <a href="#"><img src={youtube} alt="" className="w-10 h-10"/></a>
                    <a href="#"><img src={whatsapp} alt="" className="w-8 h-8"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'

const Header = () => {
      return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='relative'> <img
      src={image1}
      className="w-full" />
     <div className='absolute bottom-40 right-52  text-white shadow-2xs shadow-black ml-10 ' ><h1 className="text-8xl  font-bold  ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
     </div>
      </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className='relative'> <img
      src={image3}
      className="w-full" />
     <div className='absolute bottom-40 right-52  text-white shadow-2xs shadow-black ml-10 ' ><h1 className="text-8xl  font-bold  ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className='relative'> <img
      src={image2}
      className="w-full" />
     <div className='absolute bottom-40 right-52  text-white shadow-2xs shadow-black ml-10 ' ><h1 className="text-8xl  font-bold  ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className='relative'> <img
      src={image4}
      className="w-full" />
     <div className='absolute bottom-40 right-52  text-white shadow-2xs shadow-black ml-10 ' ><h1 className="text-8xl  font-bold  ">Enjoy Our <br /> <hr></hr> Delicious Meal <hr /> </h1>
     <p className='text-[10px]'>Welcome to our restaurant, where we serve delicious, fresh, and flavorful dishes made with care. Our menu offers a variety of local and international favorites, prepared using high-quality ingredients. Enjoy a wonderful dining experience with tasty meals and excellent service.

</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
         
      );
};

export default Header;

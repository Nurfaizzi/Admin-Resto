import React, { useEffect, useState } from "react";
import baner from "../../assets/kokie.png";
import bgfood from "../../assets/bg.png"
import axios from "axios";
import cooks from "../../assets/cooks.png"
import CarouselCard from "../../components/carouselCard"
import logo from "../../assets/logonavbar.png"
import { Link } from "react-router-dom";
const ProfComp = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    menus();
  }, []);

  const menus = async () => {
    try {
      const res = await axios.get(`https://api.mudoapi.tech/menus?perPage=4`);
      setMenu(res.data.data.Data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="lg:flex xl:flex-row xl:ml-0 sm:flex-col sm:ml-32 justify-around ">
        <div className="flex-column  xl:pt-32 sm:pt-8">
          <h1 className="text-6xl text-black leading-35  pb-3 sm:ml-20">
            All Delicious
          </h1>
          <h1 className="text-7xl text-black font-semibold  leading-35 w-4/6 pb-3 sm:ml-20" >
            Indonesia
          </h1>
          <p className="text-lg font-normal text-black pb-12 sm:ml-20">
            Food And Drink Best From Indonesia
          </p>
          <Link to={'/menu'}>
          <button className="bg-yellow-300 py-3 px-4 rounded-2xl text-black w-56 sm:ml-32">
            Menu
          </button>
          </Link>
        </div>
        <div className="flex">
          {/* <img  src={elips} className='flex  w-1/2 -mt-3 pr-28 ml-20'/> */}
          <img src={baner} className="flex sm:ml-8 " alt="" />
        </div>
      </div>
      <div className=" bg-yellow-300 flex-column">
        <h1 className="flex justify-center m-auto text-lg font-semibold pt-14 text-black">
          Our Delicious and Special Menu Indonesian
        </h1>
        <p className="flex justify-center m-auto pt-3 text-md font-medium">
          Food is any substance consumed by an organism for nutritional support.
        </p>
        <div className="grid gap-8 pl-8  m-auto p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-blue-500  ">
        {menu.map((obj, key) => (
          <div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="object-fill  h-48 w-96 " 
                  src={obj.imageUrl}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="m-auto text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {obj.name}
                  </h5>
                </a>
                <p class="m-auto text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                Food is any substance consumed by an organism for nutritional support.        
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="lg:flex sm:pb-10 sm:m-auto sm:justify-center sm:items-center m-auto justify-center ">
          <img src={bgfood} className="h-96 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 sm:justify-center sm:flex sm:m-auto lg:m-0"/>
          <div className="flex-column gap-8 ">
          <h1 className="flex lg:pt-20 sm:pt-0 text-4xl font-extrabold text-black m-auto text-center justify-center">Welcome to our 
          <p className="flex pl-3 pr-3 text-white">Smile</p> 
          Restaurant</h1>
          <p className="flex pt-8 w-96  text-center m-auto text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reprehenderit qui temporibus assumenda repudiandae animi enim veritatis doloremque ducimus libero deserunt laboriosam quae maxime facere, culpa rerum provident, suscipit unde!</p>
          </div>
        </div>
      </div>
     <div className="xl:flex lg:flex-row sm:flex-col justify-around">
      <div className="flex-column lg:pt-16 sm:pt-0">
       <h1 className="flex lg:pt-40 sm:pt-8 text-6xl leading-auto w-96 justify-center m-auto text-center  font-semibold  text-black">Our Smile Restaurant Expert Chef</h1>
       <p className="flex pt-6 text-center justify-center m-auto w-96   text-black">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion</p>
      </div>
      <div>
       <img src={cooks} className=" max-w-lg sm:justify-center sm:items-center sm:flex sm:m-auto" />
      </div>
     </div>
     <div className="bg-yellow-300 flex-column pb-10">
      <div className="flex-column justify-center m-auto">
      <h1 className="flex lg:text-4xl sm:text-2xl justify-center m-auto  font-semibold pt-14 text-black">
     Our Smile Restaurant Happy Customers
        </h1>
        <p className = "flex justify-center m-auto lg:pt-3 lg:m-0 lg:w-full text-xs font-medium sm:p-8 sm:items-center sm:m-auto sm:pt-3 sm:w-2/3 ">A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.</p>
      </div>
    <div>
    <CarouselCard />
    </div>
     </div>
      <div className="flex justify-around mt-16">
        <div className="flex-column">
         <h1 className="flex text-center justify-center m-auto font-bold">Resto Smile</h1>
          <h1 className="flex text-xs w-52 items-center m-auto justify-center text-center">Managing restaurant menus and other information including location and opening hours. Managing the preparation of orders at a restaurant kitchen.</h1>
        </div>
        <div className="flex-column">
        <h1 className="flex text-center justify-center m-auto font-bold">Navigation</h1>
        <Link to={"/menu"}>
        <p className="flex text-center m-auto justify-center">Menu</p>
        </Link>
        <Link to={'/profiel'}>
        <p className="flex text-center m-auto justify-center">Profile</p>
        </Link>
        <Link to={'/dashboard'}>
        <p className="flex text-center m-auto justify-center">Dashboard</p>
        </Link>
        
        </div>
        <div className="flex-column">
          <h1 className="flex text-center justify-center m-auto font-bold">Follow Us</h1>
        <div className="flex items-center justify-center pt-2">
        <i class="fa-brands fa-facebook"></i>
        </div>
       <div  className="flex items-center justify-center pt-2">
       <i class="fa-brands fa-twitter"></i>
       </div>
      <div  className="flex items-center justify-center pt-2">
      <i class="fa-brands fa-instagram"></i>
      </div>
 
        </div>
      </div>
    </div>
  );
};

export default ProfComp;

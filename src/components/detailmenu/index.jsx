import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../pages/redux/actions/DetailAction";
import { useParams } from "react-router-dom";
const DetailComp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.AuthMenuDetail);
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const icon = [
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      iconsoc: (
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
      ),
    },
    {
      iconsoc: (
        <a className="ml-2 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
      ),
    },
    {
      iconsoc: (
        <a className="ml-2 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
        </a>
      ),
    },
  ];

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        {/* heading Detail */}
        <div className="container px-5  mx-auto lg:pt-12 md:pt-0">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full md:object-fill  object-fill h-96 object-center rounded border border-gray-200 lg:pt-20 md:pt-8"
              src={menu.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:pt-32 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Name Menu
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {menu.name}
              </h1>

              {/* icon Detail */}
              <div className="flex mb-4">
                <span className="flex items-center gap-2">
                  {icon.map((obj, key) => (
                    <div key={key}>{obj.icon}</div>
                  ))}
                </span>

                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  {icon.map((obj, key) => (
                    <div key={key} className="gap-2 flex">
                      {obj.iconsoc}
                    </div>
                  ))}
                </span>
              </div>

              {/* desciption price type */}
              <div>
                <p className="leading-relaxed">{menu.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 gap-6 ">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rp. {menu.price}.000
                  </span>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Type : </span>
                    {(() => {
                      if (menu.type == "beverage") {
                        return "Food";
                      } else if (menu.type === "main-dish") {
                        return "Drinks";
                      } else {
                        return "6 - 8 Orang";
                      }
                    })()}
                    <div className="relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailComp;

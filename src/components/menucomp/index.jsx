import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllMenu } from "../../pages/redux/actions/MenuAction";
import Modal from "../ModalDelete";
import { DeleteMenu } from "../../pages/redux/actions/DeleteAction";
const CompMenu = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [type, setType] = useState("");
  const [filterName, setFilterName] = useState("");
  const dispatch = useDispatch();
  const { list_menu } = useSelector((state) => state.Menu);
  const {id} = useParams
  const [deleteSucces, SetDeleteSucces] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    previousPage: 0,
    nextPage: 2,
  });

  useEffect(() => {
    dispatch(
      handleGetAllMenu(type, filterName, pagination.currentPage, setPagination)
    );
  }, [pagination.currentPage]);

  const handleChangeCategory = (e) => {
    setType(e.target.value);
  };

  const handleSearchType = () => {
    dispatch(handleGetAllMenu(type, filterName));
  };

  const handleChangeSearch = (e) => {
    setFilterName(e.target.value);
  };

  const handleSearchMenu = () => {
    dispatch(handleGetAllMenu(type, filterName));
    setIsFilter(true);
  };

  const handleReset = () => {
    dispatch(handleGetAllMenu("", "", ""));

    setFilterName("");
    setType("");
    setIsFilter(false);
  };

  const handlePreviousPage = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
  };

  const handleNextPage = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };

  const handleShowModal = (e) => {
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id, config) => {
    dispatch(DeleteMenu(id, config, filterName, type));
    SetDeleteSucces(true);
    setTimeout(() => {
      SetDeleteSucces(false);
    }, 4000);
  };

  return (
    <div className=" border-red h-screen flex-column justify-center items-center bg-white ">
      {/* button filter add Menu And Searcj */}
      <div>
        <div className="items-center  max-w-screen-xl m-auto  ">
          <div className="flex">{/* <img src={banner} width={1573} /> */}</div>
          <div className="flex items-center justify-center text-center m-auto pt-10"></div>
        </div>
        <div id="menu">
          <div className="xl:flex md:flex sm:flex justify-between">
            <div className="gap-8 pr-8 pl-8 pt-2">
              <select
                value={type}
                onChange={handleChangeCategory}
                onClick={handleSearchType}
                className=" py-1.5 px-3 bg-yellow-500 text-white rounded-xl"
              >
                <option value={type}>Pilih Menu</option>
                <option value={""}>All Menu</option>
                <option value={"beverage"}>Foods</option>
                <option value={"main-dish"}>Drinks</option>
              </select>

              <Link to={"/newmenu"}>
                <button className="text-white bg-blue-500 border border-blue-500 py-1.5 px-3 rounded-xl ml-8">
                  + add Menu
                </button>
              </Link>
            </div>

            <div className="align-text-bottom lg:pr-8 xl:pr-8 sm:pr-8 ">
              <input
                type="text"
                className="form-control border-black-500 rounded-sm p-2 border-solid border-2 border-black-600   shadow-md  "
                placeholder="Search"
                onChange={handleChangeSearch}
                value={filterName}
              />
              <button
                className="text-white bg-yellow-500 border border-yellow-500 py-2.5 px-6 rounded-sm"
                onClick={isFilter ? handleReset : handleSearchMenu}
              >
                {isFilter ? "Reset" : "Search"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {deleteSucces ? (
        <p className=" flex text-white bg-green-500  xl:text-center xl:p-3 xl:justify-center xl:m-auto xl:w-96 sm:w-96 sm:mt-8 lg:text-center lg:p-3 lg:justify-center lg:m-auto sm:text-center sm:p-3 sm:justify-center sm:m-auto ">
          Data Berhasil Dihapus
        </p>
      ) : null}

      {/* Lopping Data */}
      <div>
        <div className="grid gap-8 pl-8  m-auto p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-blue-500  ">
          {list_menu.map((obj, key) => (
            <div
              key={key}
              className="rounded-xl shadow-md  p-4 container mx-auto px-4 py-8 "
            >
              <div className=" sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 border-blue-500 sm-items-center">
                <div className="flex-col object-fill">
                  <div className="md:shrink-0 ">
                    <img
                      className="object-fill h-48 w-96 "
                      src={obj.imageUrl}
                    />
                    <div className="flex md:gap-2  lg:gap-6 sm:gap-6 items-center justify-center pb-3 pt-3 ">
                      <Link to={`/editmenu/${obj.id}`}>
                        <button className="text-white bg-yellow-500 border border-yellow-500 py-1.5 px-3 rounded-xl">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={handleShowModal}
                        className="text-white bg-red-500 border border-red-500 py-1.5 px-3 rounded-xl"
                      >
                        Delete
                      </button>

                      <Modal isShowModal={showModal} onClose={CloseModal}>
                        <div className="">
                          <h1 className="flex text-center justify-center text-3xl ">
                            Are you sure?
                          </h1>
                          <p className="flex text-red-500 text-lg font-semibold text-center justify-center xl:pt-0 sm:mt-8 ">
                            DELETE MENU
                          </p>
                          <a href="#menu">
                            <button
                              className=" sm:ml-6 sm:mr-3 sm:w-28 sm:mt-8 text-white bg-blue-500 border border-blue-500 py-1.5 px-3 rounded-xl mr-0 mt-8 justify-center flex-rows  xl:w-28 xl:ml-0 xl:mt-3 xl:mr-3"
                              onClick={(e) => handleDelete(obj.id)}
                            >
                              Yes
                            </button>
                            <button className="text-white bg-red-500 border border-red-500 py-1.5 px-3 rounded-xl xl:w-28 sm:w-28">
                              Cancel
                            </button>
                          </a>
                        </div>
                      </Modal>

                      <Link to={`/detailmenu/${obj.id}`}>
                        <button className="text-white bg-yellow-500 border border-yellow-500 py-1.5 px-3 rounded-xl">
                          Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 ">
                    <h1
                      href="#"
                      className=" leading-tight font-medium text-black hover:underline w-60 pb-3 "
                    >
                      {obj.name}
                    </h1>
                    {(() => {
                      if (obj.type == "beverage") {
                        return "Food";
                      } else if (obj.type === "main-dish") {
                        return "Drinks";
                      } else {
                        return "6 - 8 Orang";
                      }
                    })()}
                    <p className="mt-2 text-blue-500 pb-3">
                      Rp.{obj.price}.000
                    </p>
                    <p className=" pb-3 text-sm">{obj.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">Showing Page</p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#menu"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <button onClick={handlePreviousPage}>Previous</button>
                </a>

                <a
                  href="#menu"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <button
                    onClick={handleNextPage}
                    disabled={list_menu.length < 6 ? true : false}
                  >
                    Next
                  </button>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompMenu;

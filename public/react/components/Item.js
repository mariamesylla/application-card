import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import apiURL from "../api";
import { UpdateItem } from "./UpdateItem";
import { Carousel } from "./Carousel";

export const ItemContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const fetchItem = async () => {
    try {
      const res = await fetch(`${apiURL}/items/${id}`);
      const data = await res.json();
      setItem(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleClick = async () => {
    await DeleteItem(item.id);
    navigate("/items");
  };

  const DeleteItem = async (Id) => {
    try {
      const res = await fetch(`${apiURL}/items/${Id}`, {
        method: "DELETE",
      });
      //   setItem(item.filter((item) => item.id !== Id));
      fetchItem();
      console.log("Item deleted !");
      //console.log('Unable to delete item');
    } catch (error) {
      console.log(error)
    }
  };


    return (
        <div className='bg-white'>
            <div className='mx-auto px-4 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-10 sm:max-w-full flex flex-col'>
                {/* container-item */}
                <div className='flex flex-col items-center mt-5 md:flex-row'>
                    {/* container Image */}
                    <div className='mt-7 max-w-[40%] max-h-[40%] md:max-h-full md:max-w-full md:mt-0'>
                        <img className='mb-20 h-full w-full object-cover object-center lg:max-w-full' src={item.image} alt='Item Image' />
                    </div>
                    {/* description page */}
                    <div className='flex flex-col ml-12 mr-12 md:ml-20 md:mt-[-5em]'>
                        <div className="flex justify-between">
                          <h2 className='font-bold text-xl mb-1'>{item.name}</h2>
                          <h3 className="font-md text-lg ml-auto'">${item.price}</h3>
                        </div>
                        <hr />
                        <p className='mt-10'>{item.description}</p>
                    </div>
                </div>

            {/* BUTTONS */}
            <div className='flex w-[30%] ml-auto mr-20 justify-around mt-2 p-4 md:mt-0 md:p-0 md:mr-10'>
                {/* DELETE BUTTON */}
                <div className='ml-auto mr-5 md:mr-[-70px]'>
                    <button
                        onClick={handleClick}
                        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                    >
                        Delete
                    </button>
                </div>

                {/* UPDATE BUTTON */}
                <div className='ml-auto'>
                    <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'>
                        <Link to={`/updateItem/${item.id}`}>Update</Link>
                    </button>
                </div>
            </div>
            {/* Show more the same */}
            <div className="mt-20 px-4 py-16">
                <div className="text-center">More the same</div>
                <div>
                    <Carousel key={item.id} categoryCheck={item.category} />
                </div>
            </div>
        </div>
    </div>
  );
};
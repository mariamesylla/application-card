import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import apiURL from "../api";
import { UpdateItem } from "./UpdateItem";
import { SameCategory } from "./SameCategory";

export const ItemContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const fetchItem = async () => {
    try {
      const res = await fetch(`${apiURL}/items/${id}`);
      const data = await res.json();
      setItem(data);
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
      console.log(error);
    }
  };


    return (
        <div className=''>
            <div className='mx-auto px-4 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-10 sm:max-w-full flex flex-col'>
                {/* container-item */}
                <div className='flex items-center mt-5'>
                    {/* container Image */}
                    <div className=''>
                        <img className='h-full w-full object-cover object-center lg:max-w-full' src={item.image} alt='Item Image' />
                    </div>
                    {/* description page */}
                    <div className='flex flex-col ml-20'>
                        <h2 className='font-bold text-xl mb-1'>{item.name}</h2>
                        <hr />
                        <p className='mt-12'>{item.description}</p>
                    </div>
                </div>

            {/* BUTTONS */}
            <div className='flex w-[30%] ml-auto mr-10'>
                {/* DELETE BUTTON */}
                <div className='ml-auto'>
                    <button
                        onClick={handleClick}
                        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-600'
                    >
                        Delete
                    </button>
                </div>

                {/* UPDATE BUTTON */}
                <div className='ml-auto'>
                    <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-600'>
                        <Link to={`/updateItem/${item.id}`}>Update</Link>
                    </button>
                </div>
            </div>
            {/* Show more the same */}
            <div className="mt-20 px-4 py-16">
                <div className="text-center">More the same</div>
                <div>
                    <SameCategory categoryCheck={item.category} />
                </div>
            </div>
        </div>
    </div>
  );
};
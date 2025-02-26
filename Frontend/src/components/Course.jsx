import React from 'react'
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="bg-[#FCF8F1] bg-opacity-90 py-10 sm:py-16 lg:py-24">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl text-black  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500"> Here!</span>
          </h1>
          <p className="mt-12 text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
          </button>
          </Link>
          
        </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item)=>(
            <Cards key={item.id} item={item}/>))}
          </div>
      </div>

    </>
  );
}

export default Course;
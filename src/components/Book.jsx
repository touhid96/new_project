import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div>
      <Link to={`/book/${book.isbn13}`}>
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
          <img
            src={book.image}
            alt="books image"
            className="object-cover w-full h-56 md:h-64 xl:h-80"
          />
          <div className="bg-black bg-opacity-75 text-yellow-300  absolute opacity-0 hover:opacity-50 inset-0 flex flex-col">
            <p>{book.title}</p>
            <br />
            <p>
              {book.subtitle.substring(0, 5)}....
              {book.subtitle ? book.subtitle : "kiso nai"}
            </p>
            <br /> <p className="mt-auto my-auto"> {book.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;

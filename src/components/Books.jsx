import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Loading from "./Loading";

const Books = () => {
  const { books } = useLoaderData();

  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="my-container">
      <div className=" grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

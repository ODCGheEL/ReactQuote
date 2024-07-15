import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/lib/utils";

export default function EditFavorite() {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      const quote = await axios.get(
        `${BACKEND_URL}${params.id}`
      );
      setName(quote.data.name);
      setDescription(quote.data.description);
    }
    fetchQuote();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.put(
      `${BACKEND_URL}${params.id}`,
      {
        name,
        description,
      }
    );
    navigate("/favorites");
  };

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold my-4 underline">
        Edit your favorite quotes!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

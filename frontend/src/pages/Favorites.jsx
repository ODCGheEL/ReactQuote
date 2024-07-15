import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilePenLine, Trash2 } from "lucide-react";
import { BACKEND_URL } from "@/lib/utils";

export default function Favorites() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);

  async function fetchQuotes() {
    const result = await axios.get(`${BACKEND_URL}`);
    setQuotes(result.data);
  }

  async function deleteQuote(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quote?"
    );
    if (confirmDelete) {
      const result = await axios.delete(`${BACKEND_URL}${id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl underline font-extrabold my-5">
        Your favorite quotes
      </h1>
      {quotes.length > 0 ? (
        <div className="flex gap-3 items-center">
          {quotes.map((quote) => (
            <div className="" key={quote.id}>
              <Card className="bg-black text-white">
                <CardHeader>
                  <CardTitle>{quote.name}</CardTitle>
                  <CardDescription>{quote.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-3">
                  <Button
                    variant="destructive"
                    onClick={() => deleteQuote(quote.id)}
                  >
                    <Trash2 />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => navigate(`/favorites/${quote.id}`)}
                  >
                    <FilePenLine />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-destructive text-center my-5 font-semibold">
            You don't have any favorite quotes!
          </p>
          <div className="flex justify-center my-5">
            <Button>
              <Link to="/">Add one!</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

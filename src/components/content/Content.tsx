"use client";
import React, { useEffect, useState } from "react";
import fetchQuote from "../../pages/api/fetchQuote";
import Image from "next/image";
import chack from '../../assets/images/chackone.png'
import Button from "../UI/Button";

export default function Content() {
  const [quote, setQuote] = useState("");

  const fetchNewQuote = async () => {
    const res = await fetchQuote();
    setQuote(res.value);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);
  return (
    <main className="flex space-x-8 justify-between">
      <div className="max-w-80 h-450  pt-10 pl-5">
        <Image src={chack} alt="logo" priority={true} className="w-30 h-30" />
      </div>
      <div className="mb-8 flex items-center justify-center">
        <h2 className="text-gray-800">{quote}</h2>
      </div>
      <div className="mt-auto mb-4 pr-5">
        <Button text="New Quote" onClick={fetchNewQuote} />
      </div>
    </main>
  );
}
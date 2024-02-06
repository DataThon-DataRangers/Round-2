"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
  const [news, setNews] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setNews(response.data["articles"]);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center my-8 font-bold">
        Latest Health News
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 md:mx-12">
        {news.map((newsA) => {
          return (
            <>
              <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <img
                  alt={newsA.title}
                  src={newsA.urlToImage}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <a href={newsA.url}>
                    <h3 className="text-lg font-medium text-gray-900">
                      {newsA.title}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {newsA.description}
                  </p>

                  <a
                    href={newsA.url}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Read out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
}
const Card = () => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </>
  );
};

import { Image, Link } from "@nextui-org/react";
import React from "react";
import { articleList } from "./mock";
import { PiFireSimpleBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-[url(https://blog.opencollective.com/content/images/size/w2000/2022/07/Blog-header---Specified--1.jpg)] bg-[length:auto_580px] h-screen overflow-auto">
      <header className="sticky top-0 backdrop-blur-lg z-10">
        <div className="md:h-20 h-16 lg:max-w-7xl container mx-auto px-4 md:px-8 gap-4 md:gap-10 flex w-full [&_a]:font-medium [&_a]:text-slate-900">
          <Link>WebSite</Link>
          <Link>Case Studies</Link>
          <Link>News</Link>
          <Link>How-To</Link>
          <Link>Help</Link>
        </div>
      </header>
      <div className="top-content flex flex-col justify-center items-center h-[230px] md:h-[430px]">
        <Image
          src="https://blog.opencollective.com/content/images/2022/07/03--Logotype.png"
          width={516}
          height={120}
        />
        <p className="mt-2 text-xl">Official Blog</p>
      </div>
      <main className="grid gap-6 grid-cols-1 lg:grid-cols-6 px-4 md:px-8 container mx-auto lg:max-w-7xl relative z-0 ">
        {articleList.map((item, index) => (
          <div
            className="border-slate-300 hover:backdrop-blur-lg transition-all duration-150 ease-linear hover:bg-white/80 hover:ring-[20px] hover:ring-white/95 hover:rounded-lg group first:col-span-6 [&:nth-child(2)]:col-span-6 lg:[&:nth-child(2)]:col-span-3 [&:nth-child(3)]:col-span-6 lg:[&:nth-child(3)]:col-span-3 lg:first:grid-cols-3 gap-4 col-span-6 lg:col-span-2 grid"
            key={index}
          >
            <div className="col-start-1 col-span-2">
              <Image
                isBlurred isZoomed
                radius="none"
                src={item.url}
                width={'100%'}
                height={(index === 1 || index === 2) ? 319 : index > 2 ? 206 : 'auto'}
              />
            </div>

            <div className="flex flex-col gap-1 col-span-1">
              <div className="flex items-center">
                <span className="text-slate-600 mr-2">{item.featured}</span>
                <PiFireSimpleBold className="text-slate-700" />
                <span className="text-slate-700">{item.tag}</span>
              </div>
              <h2 className="lg:text-2xl text-xl group-first:text-xl lg:group-first:text-5xl font-extrabold">{item.title}</h2>
              <p className="mt-2 text-slate-700 leading-5 font-sans text-base  group-first:line-clamp-3 line-clamp-2 mb-4">
                {item.content}
              </p>
              <div className="flex text-gray-500 items-center mt-auto">
                <span>{item.time}</span>
                <span>{item.late_time}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}

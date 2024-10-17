"use client"
import { Button, Card, CardBody, Tab, Tabs, Tooltip, Image as NextImage } from '@nextui-org/react'
import React from 'react'
import { justData, musicData } from './mock'
import { IoMdClose } from 'react-icons/io'
import { FiMoreVertical } from 'react-icons/fi'
import Image from 'next/image'
export default function Trending() {
  return (
    <div className='pt-3 h-full'>
      <div className="flex relative px-28  gap-2 items-center">
        <div className="absolute left-0 -bottom-[57px] right-0 h-[1px] bg-gray-300/90"></div>
        <Image src={require('./assets/trending_animated.webp')} className='size-[72px] rounded-full overflow-hidden' alt='title' />
        <div className="text-[40px] font-bold">时下流行</div>
      </div>
      <div className="px-28">
        <Tabs aria-label="Options" className='mt-4' variant="underlined" size="lg">
          <Tab key="just" title="刚刚">
            <div className="">
              {
                justData.map((item) => (
                  <div className=' border-b border-b-gray-300/80'>
                    <div className="pb-8 max-w-screen-lg">
                      {item.itemSectionRenderer?.contents?.[0]?.shelfRenderer?.title && <h4 className="font-bold py-5 text-[25px]">{item?.itemSectionRenderer?.contents?.[0]?.shelfRenderer?.title?.runs?.[0]?.text}</h4>}
                      <div className="flex flex-col gap-5">
                        {
                          item.itemSectionRenderer.contents[0].shelfRenderer.content.expandedShelfContentsRenderer.items.map((i) => (
                            <div className="flex gap-4 transition-all duration-150 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300/20 hover:ring-8 hover:ring-gray-100 dark:hover:ring-gray-300/20 rounded-xl">
                              <NextImage {...i.videoRenderer?.thumbnail.thumbnails[1]} src={i.videoRenderer?.thumbnail.thumbnails[1].url} alt="" className='rounded-xl overflow-hidden' />
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <div className="">
                                    <div className="line-clamp-2 tracking-tighter">
                                      {i.videoRenderer?.title.runs?.[0]?.text}
                                    </div>
                                    <span className="text-gray-500 tracking-normal text-sm relative top-[-4px]">
                                      {i.videoRenderer?.longBylineText.runs?.[0]?.text} <span className='text-lg'>·</span> <span>{i?.videoRenderer?.shortViewCountText?.simpleText}</span>
                                    </span>
                                  </div>
                                  <div className="flex">
                                    <Tooltip content="从观看记录中移除" className='dark:text-gray-50'>
                                      <Button radius='full' className='min-w-0 w-11 h-11 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-300/20'><IoMdClose size={20} /></Button>
                                    </Tooltip>
                                    <Button radius='full' className='min-w-0 w-11 h-11 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-300/20'><FiMoreVertical size={20} /></Button>
                                  </div>
                                </div>
                                <div className="text-sm line-clamp-3 leading-5 text-gray-600 dark:text-gray-300  tracking-wide">
                                  {i.videoRenderer?.descriptionSnippet?.runs[0]?.text}
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </Tab>
          <Tab key="music" title="音乐">
            <div className="max-w-screen-lg">
              <div className="flex flex-col gap-5">
                {
                  musicData.map(i => (
                    <div className="flex gap-4 transition-all duration-150 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300/20 hover:ring-8 hover:ring-gray-100 dark:hover:ring-gray-300/20 rounded-xl">
                      <NextImage {...i.videoRenderer?.thumbnail.thumbnails[1]} src={i.videoRenderer?.thumbnail.thumbnails[1].url} alt="" className='rounded-xl overflow-hidden' />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="">
                            <div className="line-clamp-2 tracking-tighter">
                              {i.videoRenderer?.title.runs?.[0]?.text}
                            </div>
                            <span className="text-gray-500 tracking-normal text-sm relative top-[-4px]">
                              {i.videoRenderer?.longBylineText.runs?.[0]?.text} <span className='text-lg'>·</span> <span>{i?.videoRenderer?.shortViewCountText?.simpleText}</span>
                            </span>
                          </div>
                          <div className="flex">
                            <Tooltip content="从观看记录中移除" className='dark:text-gray-50'>
                              <Button radius='full' className='min-w-0 w-11 h-11 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-300/20'><IoMdClose size={20} /></Button>
                            </Tooltip>
                            <Button radius='full' className='min-w-0 w-11 h-11 p-0 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-300/20'><FiMoreVertical size={20} /></Button>
                          </div>
                        </div>
                        <div className="text-sm line-clamp-3 leading-5 text-gray-600 dark:text-gray-300  tracking-wide">
                          {i.videoRenderer?.descriptionSnippet?.runs[0]?.text}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </Tab>
          <Tab key="game" title="游戏">
          游戏
          </Tab>
          <Tab key="movie" title="电影">
            <Card>
            电影
            </Card>
          </Tab>
        </Tabs>
      </div>

    </div>
  )
}

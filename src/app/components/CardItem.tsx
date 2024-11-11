import { Button, Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Image } from '@nextui-org/react'
import React from 'react'

import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { PiProhibit, PiSpeakerSlash } from "react-icons/pi";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineSubtitlesOff } from "react-icons/md";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { RiPlayList2Line } from "react-icons/ri";
import { WiTime4 } from "react-icons/wi";
import { IoBookmarkOutline } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineShare } from "react-icons/hi2";
import { SlFlag } from "react-icons/sl";

import { mockList } from './mock'
export default function CardItem() {
  return (
    <div className="gap-x-3 xs:gap-y-4 md:gap-y-4 xl:gap-y-5 2xl:gap-y-5 3xl:gap-y-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 h-full ">
      {mockList.map((item, index) => (
        <div className=' hover:bg-red-200/30 hover:ring-8 group hover:cursor-pointer hover:ring-red-200/30 rounded-xl transition-all duration-200' key={index}>
          <div className="overflow-visible p-0 relative">
            <Button className="min-w-0 p-0 absolute top-[10px] right-[10px] z-[11] w-10 h-10 bg-gray-900/40 hidden group-hover:flex transition-all duration-500 delay-100" radius='full'><PiSpeakerSlash size={22} color='#fff' /></Button>
            <Button className="min-w-0 p-0 absolute top-[55px] right-[10px] z-[11] w-10 h-10 bg-gray-900/40 hidden group-hover:flex transition-all duration-500 delay-100" radius='full'>
              <MdOutlineSubtitles size={22} color='#fff' />
            </Button>
            <Image {...item.richItemRenderer?.content?.videoRenderer?.thumbnail?.thumbnails?.[0]} src={item.richItemRenderer?.content?.videoRenderer?.thumbnail?.thumbnails?.[0]?.url} alt="avatar" />
            <div className="mt-3 flex justify-between items-start">
              <Image className='rounded-full' width={item.richItemRenderer?.content?.videoRenderer?.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails?.[0]?.width ??0 / 2} height={item.richItemRenderer?.content?.videoRenderer?.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails?.[0]?.height ??0 / 2} src={item.richItemRenderer?.content?.videoRenderer?.channelThumbnailSupportedRenderers?.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails?.[0]?.url ?? ''} alt="avatar" />
              <div className="w-2/3 flex flex-col ml-2">
                <div className="line-clamp-2">{item.richItemRenderer?.content.videoRenderer.title.runs[0].text}</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">
                  {item.richItemRenderer?.content.videoRenderer.longBylineText.runs[0].text}
                </div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">
                  {item.richItemRenderer?.content.videoRenderer.shortViewCountText.simpleText} <span className='font-bold text-lg rounded-full mx-1'>·</span>
                  {item.richItemRenderer?.content.videoRenderer.publishedTimeText?.simpleText}
                </div>
              </div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button radius='full' className='min-w-0 p-0 bg-transparent w-10 h-10'>
                    <CgMoreVerticalAlt size={22} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat" className='dark:text-gray-50'>
                  <DropdownSection showDivider>
                    <DropdownItem key="house" textValue="house" startContent={<RiPlayList2Line />}>添加到待播放列表</DropdownItem>
                    <DropdownItem key="vip" textValue="vip" startContent={<WiTime4 size={20} />}>保存到"稍后观看"</DropdownItem>
                    <DropdownItem key="person data" textValue="person data Settings" startContent={<IoBookmarkOutline size={20} />}>保存到播放列表</DropdownItem>
                    <DropdownItem key="short_cut" textValue="short_cut" startContent={<LiaDownloadSolid size={20} />}>下载</DropdownItem>
                    <DropdownItem key="mode" textValue="mode" startContent={<HiOutlineShare size={20} />}>分享</DropdownItem>
                  </DropdownSection>
                  <DropdownItem key="location" textValue="location" startContent={<PiProhibit size={20} />}> 不感兴趣</DropdownItem>
                  <DropdownItem key="location" textValue="location" startContent={<PiProhibit size={20} />}>不要推荐此视频</DropdownItem>
                  <DropdownItem key="location" textValue="location" startContent={<SlFlag size={20} />}>举报</DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

'use client'
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { histData } from './mock';
import { Button, Image, Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, Tooltip, useDisclosure } from '@nextui-org/react';
import { IoMdClose } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePause } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
const DeleteModal = (props: any) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    onOpenChange(props.visible)
  }, [props.visible])
  const onOpenChange = (open: boolean) => {
    setOpen(open)
  }
  return (
    <Modal isOpen={open} onOpenChange={onOpenChange} isDismissable={true} size='2xl'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
            <ModalBody>
              {props.children}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={() => {onClose;props.close(false)}}>
                取消
              </Button>
              <Button color="primary" variant='light' onPress={() => {onClose;props.close(false)}}>
                {props.confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default function History() {
  const [modelOpt, setModelOpt] = useState({})

  const [open, setOpen] = useState(false)
  const openModal = (type: 'clear' | 'pause') => {
    const obj = {
      clear: {
        title: '要清除观看记录吗？',
        confirmText: '清空观看记录'
      },
      pause: {
        title: '要暂停观看吗？',
        confirmText: '暂停观看'
      }
    }
    setModelOpt(obj[type])
    setOpen(true)
  }
  return (
    <div className='container mx-auto sticky top-[64px] h-full px-20 dark:text-gray-50'>
      <DeleteModal visible={open} close={(state:boolean) => setOpen(state)} {...modelOpt}>
        <p className="text-sm">Astephendev Jhon (jhon3529424@gmail.com)</p>
        <p className='text-sm'>你的 YouTube 观看记录将从所有设备上的所有 YouTube 应用中清除。</p>
        <div className='text-sm'>系统将为你重置视频推荐功能，但你在其他 Google 产品中的活动仍可能会影响该功能。要了解详情，请访问<Link href="#">我的活动记录</Link>。</div>
      </DeleteModal>
      <h2 className='text-[30px] font-bold py-8'>观看记录</h2>
      <div className="flex w-2/3">
        <div className="">
          <div className="">
            {
              histData.map((item) => (
                <div className=''>
                  <h4 className="font-bold py-3 sticky top-0">{item.itemSectionRenderer.header.itemSectionHeaderRenderer.title.runs?.[0]?.text}</h4>
                  <div className="flex flex-col gap-5">
                    {
                      item.itemSectionRenderer.contents.map((i) => (
                        <div className="flex gap-4 transition-all duration-150 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300/20 hover:ring-8 hover:ring-gray-100 dark:hover:ring-gray-300/20 rounded-xl">
                          <Image {...i.videoRenderer?.thumbnail.thumbnails[2]} src={i.videoRenderer?.thumbnail.thumbnails[2].url} className='rounded-xl overflow-hidden' />
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
              ))
            }
          </div>
        </div>
        <div className="fixed right-[140px] w-[300px]">
          <div className="search flex gap-3 items-center border-b-1 py-2 transition-all duration-200 focus-within:border-b-2 border-b-slate-950">
            <IoSearch size={20} />
            <input placeholder='搜索观看记录' className='w-full bg-transparent border-none outline-none ' />
          </div>
          <div className="flex flex-col gap-1 py-3 items-start">
            <Button className='bg-transparent hover:bg-gray-200/80 dark:bg-transparent dark:hover:bg-gray-400/80' radius='full' onClick={() => openModal('clear')}><RiDeleteBin6Line size={18} /> 清除所有观看记录</Button>
            <Button className='bg-transparent hover:bg-gray-200/80 dark:bg-transparent dark:hover:bg-gray-400/80' radius='full' onClick={() => openModal('pause')}><AiOutlinePause size={18} />暂停观看记录</Button>
            <Button className='bg-transparent hover:bg-gray-200/80 dark:bg-transparent dark:hover:bg-gray-400/80' radius='full'><IoSettingsOutline size={18} />管理所有历史记录</Button>
            <div className="pl-12 flex flex-col items-start">
              <button className='bg-transparent justify-start border-none outline-none py-1 text-gray-500 dark:text-gray-300'>评论</button>
              <button className='bg-transparent justify-start border-none outline-none py-1 text-gray-500 dark:text-gray-300'>帖子</button>
              <button className='bg-transparent justify-start border-none outline-none py-1 text-gray-500 dark:text-gray-300'>实时聊天</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

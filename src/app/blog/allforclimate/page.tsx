"use client"
import { Avatar, AvatarGroup, Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Link, Modal, ModalContent, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, Tooltip, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { IoMdSearch, IoMdTime } from 'react-icons/io'
import { FaCheckCircle, FaChevronDown, FaInstagram } from "react-icons/fa";
import { MdDateRange, MdOutlineMail } from 'react-icons/md';
import { RiGlobalLine, RiInformationLine, RiTwitterXFill } from 'react-icons/ri';
import { LuFileText } from 'react-icons/lu';
import { list } from './mock';

const CateGoryAnchor = (props: { id: string, title: string, url: string, subTitle: string, tip: string }) => (
  <div className="flex pt-20 flex-col" id={props.id}>
    <h2 className="flex gap-2 text-2xl items-center">
      <Image src={props.url} width={48} height={48} />
      {props.title}
      <Tooltip content={props.tip}>
        <RiInformationLine />
      </Tooltip>
      <div className="flex-auto h-[1px] bg-gray-200"></div>
    </h2>
    <h3 className="mt-4 text-slate-600 text-sm">{props.subTitle}</h3>
  </div>
)
export default function AllForClimate() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-screen overflow-auto scroll-smooth">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="blur">
        <ModalContent className="flex justify-between rounded-full max-w-lg [&_button[aria-label=Close]]:top-2 [&_button[aria-label=Close]]:right-2">
          <div className="flex gap-2 items-center px-1">
            <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20" onClick={() => onOpen()}>
              <IoMdSearch size={20} />
            </Button>
            <div className="rounded-full overflow-hidden flex-auto">
              <input placeholder="Search posts, tags and authors" className="flex-auto outline-none border-none bg-transparent h-full w-full py-2 indent-2 text-base text-slate-800 font-sans caret-slate-400 placeholder:text-slate-400 placeholder:text-medium" />
            </div>
            <Button radius="full" className="min-w-0 p-0 w-8 h-8 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20 mr-10" endContent={<HiOutlineArrowSmRight size={22} />}></Button>
          </div>
        </ModalContent>
      </Modal>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="[&_header]:px-0 bg-transparent [&_a]:text-slate-900 static w-full" maxWidth="2xl" isBordered shouldHideOnScroll>
        <div className="container mx-auto gap-4 md:gap-6 px-4 xs:px-0 flex items-center w-full ">
          <Image src="https://blog.opencollective.com/content/images/2022/07/03--Logotype.png" width={172} height={40} />
          <NavbarMenu className="[&_a]:text-slate-900 [&_a]:px-4 px-4 [&_a]:py-2 ">
            <Link>财务托管方</Link>
            <Link>Case Studies</Link>
            <Link>News</Link>
            <Link>How-To</Link>
            <Link>帮助 & 支持</Link>
          </NavbarMenu>
          <NavbarContent className="sm:flex  flex-1 hidden " justify="start">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                    endContent={<FaChevronDown />}
                  >
                    解决方案
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                >
                  对于集体
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  对于赞助商
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  对于财务托管方
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                    endContent={<FaChevronDown />}
                  >
                    产品
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                >
                  定价
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  运行模式
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  财务托管
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                    endContent={<FaChevronDown />}
                  >
                    企业
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                >
                  博客
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  回归社区
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  关于
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link>帮助 & 支持</Link>
          </NavbarContent>
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 ml-auto xs:flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20" onClick={() => onOpen()}>
            <IoMdSearch size={22} />
          </Button>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </div>
      </Navbar>
      {/* bg-[url(https://images.opencollective.com/allforclimate/a4a557d/background.png)] */}
      <div className="container mx-auto lg:max-w-7xl mt-10 px-4 md:px-10 relative z-0 bg-no-repeat  bg-cover bg-right-top">
        <Image src="https://images.opencollective.com/allforclimate/8b3fc63/logo/256.png?height=256" width={128} height={128} />
        <h1 className="text-3xl font-semibold my-2">All For Climate</h1>
        <div className="flex gap-4">
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <MdOutlineMail size={20} />
          </Button>
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <RiGlobalLine size={20} />
          </Button>
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <RiTwitterXFill size={20} />
          </Button>
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <FaInstagram size={20} />
          </Button>
          <Link size="sm" className="text-gray-700">财务托管条款</Link>
          <Link size="sm" className="text-gray-700">托管费用: 4%</Link>
        </div>
        <h2 className="mt-2">Host dedicated to citizen initiatives and movements for climate and social justice</h2>
      </div>
      <header className="top-0 sticky z-10 shadow-md backdrop-blur-lg bg-gray-50/80">
        <div className="container mx-auto lg:max-w-7xl mt-10 relative z-0 px-4 xs:px-10 py-3 [&_a]:text-slate-700 [&_a]:flex &_a]:items-center [&_a]:gap-2 flex gap-6">
          <Link href="#category-CONTRIBUTE">
            <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconContribute.png&w=32&q=75" width={32} height={32} />
            贡献</Link>
          <Link href="#category-CONTRIBUTIONS">
            <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconContribute.png&w=32&q=75" width={32} height={32} />
            捐款
          </Link>
          <Link href="#category-BUDGET">
            <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconBudget.png&w=64&q=75" width={32} height={32} />
            预算
          </Link>
          <Link href="#category-CONNECT">
            <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconConnect.png&w=64&q=75" width={32} height={32} />
            链接
          </Link>
          <Link href="#category-ABOUT">
            <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconAbout.png&w=32&q=75" width={32} height={32} />
            关于
          </Link>
          <div className="flex ml-auto gap-4">
            <Button radius="full" className=" bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20" startContent={<FaCheckCircle size={20} />}>
              应用
            </Button>
            <Dropdown>
              <DropdownTrigger><Button radius="full" className="bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">操作</Button></DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new" startContent={<LuFileText />}>提交支出</DropdownItem>
                <DropdownItem key="copy" startContent={<MdOutlineMail />}>联系</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="container mx-auto lg:max-w-7xl px-4 xs:px-10 py-4">
        <CateGoryAnchor title="贡献" subTitle='成为财政捐助者。' url='https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconContribute.png&w=32&q=75' tip='通过单次、月度或年度贡献支持 All For Climate。' id='category-CONTRIBUTE' />
        <h2 className="text-3xl mt-16 mb-10">资金贡献</h2>
        <div className="grid gap-8 grid-cols-4 overflow-y-auto">
          {
            list.map(item => (
              <div className="rounded-2xl overflow-hidden border border-slate-300" key={item.id}>
                <div className="h-[104px] px-4 relative">
                  <span className="absolute bottom-2 z-[1]"><Chip>{item.tag}</Chip></span>
                  <div className="absolute top-0 bottom-0 left-0 right-0 z-0 [&_img]:object-cover">
                    <Image src={item.url} height={104} width={'100%'} radius='none' />
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-xl">{item.name}</div>
                  <p className="flex items-center gap-1 text-sm text-slate-500 mt-2"><MdDateRange stroke='1' /> {item.date}</p>
                  <p className="flex items-center gap-1 text-sm text-slate-500 mb-2"><IoMdTime stroke='1' />{item.time}</p>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                  <Button radius="full" className="w-full my-6 bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
                    查看活动
                  </Button>
                  <div className="flex text-sm items-center gap-4">
                    <p>参与者</p>
                    <p className="h-[1px] bg-gray-200 flex-auto"></p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                    <AvatarGroup isBordered className="h-full">
                      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    </AvatarGroup>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="container mx-auto lg:max-w-7xl px-4 xs:px-10 py-4">
        <CateGoryAnchor title="捐款" subTitle='' url='https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconContribute.png&w=32&q=75' tip='' id='category-CONTRIBUTIONS' />
      </div>
      <div className="container mx-auto lg:max-w-7xl px-4 xs:px-10 py-4">
        <CateGoryAnchor title="预算" subTitle='透明公开的财务。' url='https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconBudget.png&w=64&q=75' tip='' id='category-BUDGET' />
      </div>
      <div className="container mx-auto lg:max-w-7xl px-4 xs:px-10 py-4">
        <CateGoryAnchor title="链接" subTitle='让我们开始行动吧！' url='https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconConnect.png&w=64&q=75' tip='' id='category-CONNECT' />
      </div>
      <div className="container mx-auto lg:max-w-7xl px-4 xs:px-10 py-4">
        <CateGoryAnchor title="关于" subTitle='' url='https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fcollective-navigation%2FCollectiveNavbarIconAbout.png&w=32&q=75' tip='' id='category-ABOUT' />
      </div>
    </div>
  )
}

"use client";
import { FaYoutube } from "react-icons/fa";
import Menu from "./Menu";
import { MdKeyboardVoice } from "react-icons/md";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { TbVideoPlus } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa6";
import { MdOutlineSwitchAccount, MdOutlinePersonPin, MdOutlineKeyboard } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { BsHouseAdd } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TiLocationArrowOutline } from "react-icons/ti";
import ThemeTrigger from "./ThemeTrigger";
import { PiProhibit } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { ImYoutube2 } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Header(props: any) {
  const [showSearch, setShowSearch] = useState(true)
  const triggerSearch = (flag: boolean) => {
    setShowSearch(flag)
  }
  return (
    <div className="px-2 lg:px-4 2xl:pr-8 h-[64px] sticky top-0 z-20 bg-gray-100/80 backdrop-blur-lg dark:bg-gray-950/80">
      <div className={`flex items-center ${showSearch && ''}  gap-2 justify-between h-full`}>
        {showSearch && <div className="flex items-center justify-between h-full">
          <Menu toggleMenu={(state: boolean) => { props.triggerMenu(state) }} />
          <div className="flex items-center ml-4 gap-2"><FaYoutube size={30} className="text-red-600" /> <ImYoutube2 size={60} className="dark:text-white" /></div>
        </div>
          || <Button radius="full" className="min-w-0 flex md:hidden p-0 w-12 h-12 bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20" onClick={() => triggerSearch(true)}><IoArrowBackOutline size={22} /></Button>
        }
        <div className="search flex items-center gap-2 lg:gap-3 flex-auto max-w-2xl justify-end">
          <div className={`search-bar border md:pl-6 h-12 ${!showSearch ? 'flex flex-auto pl-6' : 'border-transparent pl-0'}  md:border-gray-400 md:flex-auto rounded-full flex items-center`}>
            <input type="text" placeholder="Search" className={`${showSearch && 'hidden'}  border-0 md:flex w-full flex-1 outline-none bg-transparent`} /> <Button onClick={() => triggerSearch(false)} radius="full" className="min-w-0 p-0 w-12 h-12 bg-gray-300/40 dark:bg-gray-100/20"><IoIosSearch size={20} /></Button>
          </div>
          <Button radius="full" className="min-w-0 p-0 outline-none hidden xs:flex border-none w-12 h-12 bg-gray-300/40 dark:bg-gray-400/20 items-center justify-center">
            <MdKeyboardVoice size={22} />
          </Button>
        </div>
        <div className="flex items-center">
          <div className="mr-2 hidden sm:block"><ThemeTrigger /></div>
          <Link href="https://github.com/xiaomosong/youtube-app" target="_blank" className="lg:block hidden">
            <Button radius="full" className="min-w-0 p-0 w-12 h-12 bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
              <ImGithub size={22} />
            </Button></Link>
          <Button radius="full" className="min-w-0 p-0 w-12 hidden md:flex h-12 bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <IoLanguageSharp size={22} />
          </Button>
          <Button radius="full" className="min-w-0 p-0 w-12 h-12 hidden xs:flex bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
            <IoMdNotificationsOutline size={22} />
          </Button>
          {
            showSearch && <>
              <Button radius="full" className="min-w-0 p-0 w-12 h-12 bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20 mr-3">
                <TbVideoPlus size={22} />
              </Button>
              <div>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" className="dark:text-gray-50" variant="flat">
                    <DropdownSection showDivider>
                      <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
                        <p className="font-semibold">Signed in as Jhon</p>
                        <p className="font-semibold">2985984522@google.com</p>
                      </DropdownItem>
                      <DropdownItem key="settings" textValue="google account" startContent={<FaGoogle />}>Google 账号</DropdownItem>
                      <DropdownItem key="check account" textValue="check account" startContent={<MdOutlineSwitchAccount size={18} />}>切换账号</DropdownItem>
                      <DropdownItem key="team_settings" textValue="Team Settings" startContent={<LuSettings size={18} />}>设置</DropdownItem>
                      <DropdownItem key="help_and_feedback" textValue="help_and_feedback" startContent={<MdOutlineFeedback size={18} />}>反馈</DropdownItem>
                      <DropdownItem key="help_and_feedback" textValue="help_and_feedback" startContent={<TfiHelpAlt size={18} />}>帮助</DropdownItem>
                      <DropdownItem key="logout" color="danger" textValue="logout" startContent={<IoLogInOutline size={20} />}>退出账号</DropdownItem>
                    </DropdownSection>
                    <DropdownItem key="house" textValue="house" startContent={<BsHouseAdd />}>YouTube 工作室</DropdownItem>
                    <DropdownItem key="vip" textValue="vip" startContent={<HiOutlineCurrencyDollar size={18} />}>购买内容和会员</DropdownItem>
                    <DropdownItem key="person data" textValue="person data Settings" startContent={<MdOutlinePersonPin size={18} />}>YouTube 个人数据管理</DropdownItem>
                    <DropdownItem key="short_cut" textValue="short_cut" startContent={<MdOutlineKeyboard size={18} />}>键盘快捷键</DropdownItem>
                    <DropdownItem key="mode" textValue="mode" startContent={<PiProhibit size={18} />}>受限模式</DropdownItem>
                    <DropdownItem key="location" textValue="location" startContent={<TiLocationArrowOutline size={20} />}> 位置</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}
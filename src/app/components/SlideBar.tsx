'use client'
import { Dropdown, Button, DropdownMenu, DropdownItem, DropdownTrigger,Link } from "@nextui-org/react";
import { BiHomeHeart } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHistory, MdOutlineFeedback } from "react-icons/md";
import { RiPlayList2Line } from "react-icons/ri";
import { WiTime3 } from "react-icons/wi";
import { GoThumbsup } from "react-icons/go";
import { FaHotjar, FaYoutube } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoBroadcast } from "react-icons/go";
import { GiHeartWings } from "react-icons/gi";
import { TfiHelpAlt } from "react-icons/tfi";
import { LuSettings } from "react-icons/lu";
import { SlFlag } from "react-icons/sl";
import { SiNeteasecloudmusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

export default function SlideBar(props: { menuState: boolean }) {
  return (
    <div className={`flex flex-col mx-3 divide-y-small dark:divide-gray-400/40 gap-2 ${props.menuState ? 'items-center justify-center' : 'w-[240px]'}`}>
      {
        [{ title: '', id: 1, list: [{ Icon: BiHomeHeart, text: '首页', href: '/',iconOpt:{} }, { Icon: SiYoutubeshorts, text: 'shorts', href: '',iconOpt:{} },{ Icon: MdOutlineSubscriptions, text: '订阅', href: '',iconOpt:{} },] }, {
          title: '我的', id: 2, list: [{ Icon: MdHistory, text: '历史记录', href: '/history',iconOpt:{} },
          { Icon: RiPlayList2Line, text: '播放列表', href: '',iconOpt:{} }, { Icon: WiTime3, text: '稍后观看', href: '',iconOpt:{} }, { Icon: GoThumbsup, text: '赞过的视频', href: '' ,iconOpt:{}},]
        },
        { title: '探索', id: 3, list: [{ Icon: FaHotjar, text: '时下流行', href: '/trending',iconOpt:{} }, { Icon: IoMusicalNotesOutline, text: '音乐', href: '',iconOpt:{} }, { Icon: RiMovie2Line, text: '电影', href: '',iconOpt:{} }, { Icon: IoGameControllerOutline, text: '游戏', href: '' }, { Icon: GoBroadcast, text: '直播', href: '' }, { Icon: GiHeartWings, text: '体育', href: '' },] },
        {
          title: '', id: 4,
          list: [{ Icon: LuSettings, text: '设置' , href: '',iconOpt:{}}, { Icon: SlFlag, text: '举报记录', href: '',iconOpt:{} }, { Icon: TfiHelpAlt, text: '帮助' , href: '',iconOpt:{}}, { Icon: MdOutlineFeedback, text: '发送反馈', href: '' ,iconOpt:{}},]
        },
        {
          title: '更多 YouTube 产品与功能', id: 5,
          list: [{ Icon: FaYoutube,iconOpt:{className: 'text-red-500'}, text: 'YouTube  Premium', href:'' }, { Icon: SiNeteasecloudmusic,iconOpt:{className: 'text-red-500'}, text: 'YouTube Music', href:'' }, { Icon: SiYoutubekids,iconOpt:{className: 'text-red-500'}, text: 'YouTube Kids', href:'' }, ]
        },
        ].map((i, index) => (
          <div className="flex flex-col pt-2" key={i.id}>
            {i.title && !props.menuState && <Button className="w-full justify-start" variant="light">{i.title}</Button>}
            {
              i.list.map(item => (
                <Dropdown key={item.text}>
                  <DropdownTrigger>
                  <Link href={item.href} className="">
                    <Button
                      variant="light"
                      className={`min-w-0 ${props.menuState ? '!w-14 !h-12 px-2' : '!justify-start gap-5 px-4 w-full'}    border-1 border-transparent hover:border-1`}
                    >
                      <item.Icon size={props.menuState ? 22 : 22} {...item?.iconOpt}/> {!props.menuState && item.text}
                    </Button></Link>
                  </DropdownTrigger>
                  <div className=""></div>
                  {/* <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                    <DropdownItem
                      key="new"
                      shortcut="⌘N"
                    >
                      New file
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      shortcut="⌘C"
                    >
                      Copy link
                    </DropdownItem>
                    <DropdownItem
                      key="edit"
                      shortcut="⌘⇧E"
                    >
                      Edit file
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      shortcut="⌘⇧D"
                    >
                      Delete file
                    </DropdownItem>
                  </DropdownMenu> */}
                </Dropdown>
              ))
            }
          </div>
        ))
      }
      {!props.menuState && (
        <div className="py-2 px-4">
          <div className="flex flex-wrap w-full text-gray-500 dark:text-gray-300 gap-2 text-sm">
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">关于</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">新闻</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">联系我们</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">创作者</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">广告</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">开发者</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">条款</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">隐私权</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">政策与安全</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">YouTube 的运作方式</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-300 text-sm">测试新功能</Link>
          </div>
          <div className="text-gray-400 dark:text-gray-200 mt-3 text-sm">© 2024 Google LLC</div>
        </div>
      )}
    </div>
  );
}
'use client'
import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import CategoryTab from "./components/CategoryTab";
import Header from "./components/Header";
import SlideBar from "./components/SlideBar";
import { usePathname } from "next/navigation";

export default function App({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const [state, setMenuState] = useState(false)
  // 根据操作系统类型添加或移除CSS类
  // function toggleScrollbarStyle() {
  //   if (navigator?.userAgentData?.platform === 'Windows') {
  //     document.documentElement.classList.add('windows');
  //   } else {
  //     document.documentElement.classList.remove('windows');
  //   }
  // }
  // useEffect(() => {
  //   // 初始化
  //   toggleScrollbarStyle();
  // }, [])
  return (
    <div className="box-border h-screen min-h-screen w-screen overflow-auto dark:bg-gray-950 dark:text-gray-50">
      <Header triggerMenu={(menuState: boolean) => { setMenuState(menuState) }} />
      <div className="box-border overflow-auto fixed z-20 left-0" style={{ height: 'calc(100% - 64px)' }}>
        <SlideBar menuState={state} />
      </div>
      <div className={`pt-4 pr-8 h-full relative z-10 ${!state ? 'pl-[280px]' : 'pl-[100px]'}`}>
        {
          pathname === '/' && (<>
            <CategoryTab />
            <CardItem /></>)
            || children
        }
      </div>
    </div>
  );
}

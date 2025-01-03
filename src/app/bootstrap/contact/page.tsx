"use client";
import { Button, Image, Input, Modal, ModalContent, useDisclosure, } from '@nextui-org/react'
import { GoArrowRight } from 'react-icons/go'
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { IoMdSearch } from "react-icons/io";

export default function Contact() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  return (
    <div className="h-screen overflow-auto">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent className="flex justify-between rounded-full max-w-lg [&_button[aria-label=Close]]:top-2 [&_button[aria-label=Close]]:right-2">
          <div className="flex gap-2 items-center px-1">
            <Button radius="full" className="min-w-0 p-0 w-12 h-12 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20" onClick={() => onOpen()}>
              <IoMdSearch size={20} />
            </Button>
            <div className="rounded-full overflow-hidden flex-auto">
              <input placeholder="按集体，组织等搜索..." className="flex-auto outline-none border-none bg-transparent h-full w-full py-2 indent-2 text-base text-slate-800 font-sans caret-slate-400 placeholder:text-slate-400 placeholder:text-sm" />
            </div>
            <Button radius="full" className="min-w-0 p-0 w-8 h-8 flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20 mr-10" endContent={<HiOutlineArrowSmRight size={22} />}></Button>
          </div>
        </ModalContent>
      </Modal>
      <header className="border-b flex items-center py-4 px-4 md:px-6 gap-3 sticky top-0 backdrop-blur-md bg-white/60 z-10">
        <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Foc-logo-watercolor-256.png&w=128&q=75" width={32} height={32} alt="logo" className="object-contain" />
        <Image src="https://opencollective.com/static/images/logotype.svg" width={141} height={24} alt="logo" />
        <Button radius="full" className="min-w-0 p-0 w-12 h-12 ml-auto xs:flex bg-gray-300/20 hover:bg-gray-300/40 dark:hover:bg-gray-400/20" onClick={() => onOpen()}>
          <IoMdSearch size={22} />
        </Button>
      </header>
      <main className="mt-6 flex items-center justify-between flex-col w-full">
        <div className="lg:flex-row flex gap-8 md:container mx-auto lg:max-w-7xl w-full px-10 flex-col items-center">
          <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fhelp-and-support%2Ftop-illustration.png&w=640&q=75" width={286} height={236} className="object-contain min-w-min" />
          <div className="flex-initial">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl max-w-2xl font-bold text-sky-950 leading-tight whitespace-pre-line text-pretty">你好，有什么我们能够帮你的吗？</h2>
            <h3 className="text-lg mt-4 items-center">我们的支持团队周一到周五有空，可能需要3个工作日收到恢复</h3>
          </div>
        </div>
        <div className="form-container md:max-w-xl px-4 md:px-0 w-full bg-[url(https://opencollective.com/static/images/help-and-support/contactForm-illustrations.png)] pt-12 bg-no-repeat bg-[center_top_-145px] bg-[length:825px_825px]">
          <form action="" className="shadow-lg rounded-lg p-6 w-full mx-auto space-y-10 bg-white/40 backdrop-blur-lg">
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-base self-start">
                <span>你的名字</span>
              </label>
              <input id="email-input" required placeholder="e.g., Jhon Doe" className="border-1 peer block w-full focus:invalid:border-pink-600 invalid:border-pink-600 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your name</span>
            </div>
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-base self-start">
                <span>你的电子邮箱地址</span>
              </label>
              <input type="email" required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
            </div>
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-base self-start">
                <span>你要求的主题是什么</span>
              </label>
              <input type="email" required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
            </div>
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-base self-start">
                <span>放进收藏夹 (可选)</span>
              </label>
              <input type="email" required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
            </div>
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-base self-start">
                <span>输入您的信息</span>
              </label>
              <textarea required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
            </div>
            <div className="relative">
              <label htmlFor="email-input" className="mb-1 text-sm self-start">
                <span className="font-sans font-bold">Add a link with files or something additional </span>(可选)
              </label>
              <input type="email" required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
              <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
            </div>
            <div className="text-right">
              <Button color="primary" radius='full' className="px-6 w-full xs:w-auto" endContent={<GoArrowRight />}>
                提交议题
              </Button>
            </div>
          </form>
        </div>
        <h2 className="text-xl sm:text-3xl md:text-5xl mt-20 text-center font-bold text-sky-950 leading-tight whitespace-pre-line text-pretty">如果你想要谈谈，我们就在这里！</h2>
        <div className="sm:divide-x-3 divide-x-0 flex-col sm:flex-row divide-blue-500 gap-4 sm:gap-6 md:gap-10 flex my-8">
          <div className="sm:shadow-none shadow-md p-4 rounded-lg sm:rounded-none">
            <p className="font-bold pb-2 text-xl">加入我们的Discord社区</p>
            <p>https://discord.opencollective.com</p>
          </div>
          <div className="pl-4 sm:pl-6 md:pl-10 sm:shadow-none shadow-md p-4 rounded-lg sm:rounded-none">
            <p className="font-bold text-xl pb-2">Bugs & 功能请求</p>
            <p>https://github.com/opencollective</p>
          </div>
        </div>
        <div className="bg-gray-50 py-10 flex flex-col w-full justify-center items-center">
          <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fhelp-and-support%2FneedHelp-illustration.png&w=256&q=75" width={70} height={70} />
          <p className="py-2 text-lg">不想要等待答案？</p>
          <p className="text-sm text-slate-600 ">访问我们的文档，探索主题，并找出您想要的答案。</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button color="primary" radius='full' className="px-12" variant="flat">
              查看帮助和支持
            </Button>
            <Button color="primary" radius='full' className="px-12" endContent={<GoArrowRight />}>
              查看文档
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

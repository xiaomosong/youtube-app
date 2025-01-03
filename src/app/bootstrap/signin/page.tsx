"use client";
import { Image, Button, Link } from '@nextui-org/react'
import React, { useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';

export default function Signin() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="h-screen overflow-auto">
      <header className="border-b flex items-center py-4 px-4 md:px-6 gap-3 sticky top-0 backdrop-blur-md bg-white/60">
        <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Foc-logo-watercolor-256.png&w=128&q=75" width={32} height={32} alt="logo" className="object-contain" />
        <Image src="https://opencollective.com/static/images/logotype.svg" width={141} height={24} alt="logo" />
      </header>
      <main className="md:container mx-auto mt-10 md:mt-32 flex items-center justify-between flex-col w-full md:max-w-xl">
        {
          isLogin && (
            <div className="flex items-center justify-center flex-col">
              <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Foc-logo-watercolor-256.png&w=128&q=75" width={128} height={128} alt="logo" className="size-32 object-contain" />
              <label htmlFor="email" className="text-3xl my-4 font-bold">
                用你的电子邮件继续
              </label>
              <div className="mb-12 text-slate-500">
                登录或创建个人账号以继续
              </div>
              <div className="relative w-full">
                <label htmlFor="email-input" className="mb-1 text-sm self-start">
                  <span>你的电子邮箱地址</span>
                </label>
                <input type="email" required id="email-input" autoComplete="address-level1" placeholder="e.g., yourname@youhost.com" className="peer border-1 focus:invalid:border-pink-600 invalid:border-pink-600 block w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 rounded-md" />
                <span className="text-pink-600 absolute bottom-[-23px] hidden peer-invalid:block">please input your email address</span>
              </div>
              <span className="text-pink-600 absolute bottom-0 hidden peer-invalid:block pt-1">please input your email address</span>
              <Button radius="full" size="lg" color="primary" className="mt-10 px-20 text-white disabled:bg-opacity-30 disabled:cursor-not-allowed" disabled={true}>继续</Button>
              <span className="pt-6 pb-2">还没有?</span>
              <Button color="primary" size="sm" variant="light" onClick={() => setIsLogin(!isLogin)}>
                创建用户
              </Button>
            </div>
          ) || (
            <div className="flex items-center justify-center flex-col w-full px-4">
              <Image src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Foc-logo-watercolor-256.png&w=128&q=75" width={104} height={104} alt="logo" className="size-32 object-contain" />
              <label htmlFor="email" className="text-3xl my-4 font-bold">
                创建个人账号
              </label>
              <div className="mb-12 text-slate-500">
                设置您的个人账号以继续
              </div>
              <form action="" className="w-full flex flex-col gap-8 p-6 sm:max-w-md border border-slate-200 rounded-lg">
                <div className="text-lg font-bold flex gap-3 items-center"><div>您的个人信息</div> <div className="h-[1px] bg-slate-400 flex-auto"></div></div>
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
                <div className="text-sm">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" id="allow-checkbox" />
                    <label htmlFor="email-input" className="">
                      <span>我同意 Open Collective 的 <Link>服务条款</Link></span>
                    </label>
                  </div>
                  <div className="flex gap-2 items-center mt-3">
                    <input type="checkbox" id="allow-checkbox" />
                    <label htmlFor="email-input" className="">
                      <span>订阅我们的每月新闻</span>
                    </label>
                  </div>
                </div>
                <div className="flex mt-8 gap-8 justify-center">
                  <Button color="primary" radius='full' className="px-6" onClick={() => setIsLogin(!isLogin)} startContent={<IoArrowBackOutline />}>
                    返回
                  </Button>
                  <Button color="primary" radius='full' className="px-6">
                    创建账号并继续
                  </Button>
                </div>
              </form>
              <div className="border rounded-lg sm:max-w-md border-sky-500 px-6 py-4 mt-6 text-xs">
                <div className="font-sans font-bold pb-2">Do you want to create an account for your organization?</div>
                <div className="leading-5">
                  你正在创建个人资料，在创建完成后就可以为公司创建资料。
                  <Link className="text-xs">阅读更多关于组织账号的信息</Link>
                </div>
              </div>
            </div>  
          )
        }
        <div className="md:px-0 px-8 w-full">
          <div className="flex justify-between border-t py-3 w-full mt-32 ">
            <Link className="text-small text-slate-800 hover:text-blue-600">阅读我们的隐私政策</Link>
            <Link className="text-small text-slate-800 hover:text-blue-600" href="/bootstrap/contact">联系支持</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

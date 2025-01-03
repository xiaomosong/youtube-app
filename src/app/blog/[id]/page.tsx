"use client"
import { Avatar, AvatarGroup, Button, Image, Link, Modal, ModalContent, Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { IoMdSearch } from 'react-icons/io'

export default function BlogDetails() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-screen overflow-auto">
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
      <header className="sticky top-0 backdrop-blur-lg z-10 bg-[#cbddf8]/70">
        <Navbar onMenuOpenChange={setIsMenuOpen} className="[&_header]:px-0 bg-transparent">
          <div className="lg:max-w-7xl container mx-auto gap-4 md:gap-6 px-4 xs:px-0 flex items-center w-full [&_a]:font-semibold [&_a]:text-slate-900">
            <Image src="https://blog.opencollective.com/content/images/2022/07/03--Logotype.png" width={172} height={40} />
            <NavbarMenu className="[&_a]:text-slate-900 [&_a]:px-4 px-4 [&_a]:py-2 ">
              <Link>WebSite</Link>
              <Link>Case Studies</Link>
              <Link>News</Link>
              <Link>How-To</Link>
              <Link>Help</Link>
            </NavbarMenu>
            <NavbarContent className="sm:flex gap-4 flex-1 hidden " justify="start">
              <Link>WebSite</Link>
              <Link>Case Studies</Link>
              <Link>News</Link>
              <Link>How-To</Link>
              <Link>Help</Link>
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

      </header>
      <div className="container mx-auto lg:max-w-3xl mt-8 xs:mt-20 px-4 xs:px-0 relative z-0">
        <p className="text-gray-400 text-sm">open collective europe</p>
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold mt-4 mb-6">Regranting: How Foundations Can Help grassroots communities in Europe</h1>
        <p className='text-lg'>Grant programs are powerful tools for increasing the social impact of countless initiatives around the world.</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <AvatarGroup isBordered className="h-full">
            <Avatar src="https://blog.opencollective.com/content/images/2020/02/oc-logo-icon.png" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          </AvatarGroup>
          <div className="flex flex-col ">
            <h3 className="text-lg font-bold">Open Collective, Jean-François De Hertogh</h3>
            <h4 className="text-gray-500">Jun 14, 2023 6 min read</h4>
          </div>
        </div>
        <h2 className="mt-10 mb-8 text-xl">Grant programs are powerful tools for increasing the social impact of countless initiatives around the world.</h2>
        <p className="leading-8 mb-8 font-serif text-lg">Today, solidarity initiatives are increasingly informal and decentralized and take place outside the classic NGO framework. Solidarity initiatives refer to collective actions or projects that are undertaken by individuals, groups, or organizations to address social, economic, or environmental challenges and to promote social cohesion and mutual support. These initiatives are often driven by a sense of solidarity, or a shared commitment to working together to achieve a common goal.</p>
        <p className="leading-8 mb-8 font-serif text-lg mt-8">In recent years, more informal and decentralized grassroots groups are emerging, while the vast majority of donations are still directed to international NGO's as it was observed in Lebanon. This equation makes it more difficult for institutional donors to identify and support local groups because a huge part of solidarity actions happens informally, in activist or local solidarity networks.</p>
        <p className="leading-8 mb-8 font-serif text-lg mt-8">Larger institutional donors are often constrained by a pre-defined theory of change that has been strategized and approved by their board. This makes it so that they are more risk averse or are unable to fund initiatives outside their pre-defined impact strategy. The world of frontline activism and grassroots communities is much more agile and messy, solutions to problems shift, new problems arises, unintended consequences of impact metric driven grants happen.</p>
        <p className="leading-8 mb-8 font-serif text-lg mt-8">In response, intermediary (and front line) organizations, also known as "global niche", " fiscal host", or "regrantor", are offering tools, sources of funding, and structure to grassroots movements. The global niche approach allows decentralized grassroots groups to receive and manage funding without having to set up a traditional administrative structure and loose time in overhead.</p>
        <p className="leading-8 mb-8 font-serif text-lg mt-8">In this article, we explain how collaboration between renowned foundations, global niches (which we will call regrantors here), and grassroots movements can help foundations to reach out more easily to local groups and individuals in civil society, while minimizing their administrative work.</p>
        <h2 className="mt-10 text-4xl font-bold mb-8"> What is regranting?</h2>
        <p className="leading-8 mb-8 font-serif text-lg">Regranting is the act of acquiring a large grant and using the funds from that grant to create, manage, and finance smaller grants in turn. It is about trusting and supporting smaller organizations and individuals who need funds to improve their community and know what needs to be done. With regranting comes the belief in organizations and people and funding small entities that are taking on big problem.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Regrantors are often front-line organizations with close links to grassroots groups. They are the intermediary between the initial donor (i.e. a institutional foundation or an individual philanthropist) and the ultimate beneficiary (i.e. local communities, people in a humanitarian emergency, activist networks,...). Their role is not only to propose a tailor-made grant program for the groups (often built in collaboration with external organizations and the initial donor), but also to find the technical means to redistribute funds on a large scale to people who are excluded from the current financial system or who are in remote areas.</p>
        <p className="leading-8 mb-8 font-serif text-lg">The subgrantee, as it is called, is typically a smaller organization, a grassroot group that does not have the resources to apply for grants directly, but still has the ability to make a significant impact in their community. The subgrantee can also be an individual in an emergency situation who benefits from a cash assistance initiative.</p>
        <p className="leading-8 mb-8 font-serif text-lg">In the US, the 1K project is raising several million euros in an online fund on Open Collective to send donations of $1000 directly to Ukrainian families. Managing the logistics of such a project has required Open Collective's engineers to set up a bespoke online payment system to handle several hundred payments a day to Ukrainian families. In addition, many volunteers and consultants are mobilized to create the 1K program in question and to screen the families requesting the donations.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Trust plays a major role in this project. And trust is reinforced by the transparency of economic movements offered by Open Collective. The donors of this fund trust the 1K project and Open Collective in the management of these funds. Donors use Open Collective to facilitate their own administration, to find fast and efficient online payment solutions, and to be able to contribute together to the same fund in a transparent way.</p>
        <h2 className="mt-10 mb-8 text-5xl font-extrabold">Why is regranting useful?</h2>
        <p className="leading-8 font-serif text-lg">Regranting opens the doors to more innovations in philanthropy. Regrantors are often young organisations looking to optimise their workflow through the use of advanced digital management and payment tools. Combining the entrepreneurial approach of regrantors with shared philanthropic goals of larger foundations can increase the impact of a grant programme, while minimizing its administrative burden for the Foundation.</p>
        <p className="leading-8 font-serif text-lg">In Europe, Open Collective has recently positioned itself as the intermediary of choice for several American and European foundations by offering a regranting service. In collaboration with foundations and philanthropists, Open Collective offers to create philanthropic funds to support activist networks around the world or directly support people in humanitarian emergencies. This new way of creating philanthropic funds makes it possible to:</p>
        <p className="leading-8 font-serif text-lg">Regranting can also help to build relationships between larger and smaller organizations, which can lead to future collaborations and partnerships.</p>
        <h2 className="mt-10 mb-8 text-5xl font-extrabold">The key to easily reaching the ultimate beneficiaries</h2>
        <p className="leading-8 mb-8 font-serif text-lg">In Europe, Open Collective is a pioneer in regranting. In recent years, OCE has launched various funds and programmes in partnership with US and European foundations to support local communities and individuals, such as the project Mission Mums.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Mission Mums is supporting Ukrainian refugees as they integrate into their new local communities with training, counseling and the creation of fair-pay jobs.</p>
        <p className="leading-8 mb-8 font-serif text-lg">The project was created a year ago by people from different backgrounds. As the project is decentralized across several countries and continents, they first mobilized their network to find financial support. They contacted Open Collective to ensure the possibility to receive donations and grants without having to create a foundation for the project. Their goal was to free up as much time as possible to work on the real social impact of the project, without having to spend time creating or maintaining an administrative structure.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Several actors are at work to make this project possible through regranting. A foundation and various donors in the US (including Alex Borstein, a two-time Emmy award winner), an intermediary (the regrantor/fiscal host legal entity, Open Collective Europe), and finally the hosted collective itself (the ultimate beneficiary). Donations and grants are made to Open Collective Europe, which then allocates (”regrants”) these funds to the Mission Mums project expenses.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Today, the Mission Mums collective works continuously with the support of the ecosystem described here. This has created various employment opportunities, workshops and training, and more generally a strong network of solidarity between several stakeholders.</p>
        <Image src="https://codahosted.io/docs/8P67Lomp6B/blobs/bl-VaEgEK2IYJ/9704cbc1f546dbe46b8fc07dc592b1507562bde8e5525d2310cf932111815bd0d4e15b02efcf2f01589f50afa2068a36b6e889ab821b0fc203fc4f28fa6a51d0064762eddb7c0b500a89b4d8cf6c19beafa4723a5b6ba6f44a516280815e2bc9ac2c1e32" className="w-[720px] h-[450px] object-contain" />
        <h2 className="mt-10 mb-8 text-5xl font-extrabold">Increasing the scope philanthropy</h2>
        <p className="leading-8 mb-8 font-serif text-lg">Regranting is a powerful tool that enables larger foundations to support grassroots movements and local communities without having to set up a traditional administrative structure. Regrantors, or intermediary organizations, play a crucial role in this process by managing the distribution of funds to smaller organizations and individuals who need them the most.</p>
        <p className="leading-8 mb-8 font-serif text-lg">By combining the entrepreneurial approach of regrantors with the shared philanthropic goals of larger foundations, regranting can increase the impact of a grant program while minimizing the administrative burden for the foundation. It also opens the door to more innovations in philanthropy by utilizing advanced digital management and payment tools.</p>
        <p className="leading-8 mb-8 font-serif text-lg">Through regranting, it is possible to build relationships between larger and smaller organizations, leading to future collaborations and partnerships. Overall, regranting can play a significant role in promoting social cohesion, mutual support, and addressing social, economic, and environmental challenges faced by communities worldwide.</p>
        <p className="leading-8 mb-8 font-serif text-lg">It's worth noting that this type of innovation in philanthropy not only helps improve the impact of charitable efforts, but it can also make philanthropy more appealing to a broader audience and encourage more people to become philanthropists. By leveraging new technologies and approaches, philanthropic organizations can engage donors in new and exciting ways, making it easier and more rewarding for individuals to contribute to important causes. This can ultimately help increase the scale and scope of philanthropic efforts, leading to greater social and environmental impact.</p>
      </div>
    </div>
  )
}

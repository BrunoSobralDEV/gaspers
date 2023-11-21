import Image from 'next/image'
import Link from 'next/link'

export default function Aside({ ...rest }) {
  return (
    <aside
      {...rest}
      className="relative col-span-4 row-span-5 text-white w-[calc(100vw*0.25)] text-lg mr-10 pl-[30px]"
      style={{
        background:
          'linear-gradient(90deg, #040607 0%, #42267a 100%, #040607 100%)',
      }}
    >
      <div className="relative group flex items-center my-[50px] gap-1">
        <Image
          className="rotate-12 -scale-x-100 group-hover:rotate-110 transition ease-in-out duration-300"
          src="/images/gaspers-white.svg"
          width={40}
          height={40}
          alt="Logo icon"
        />
        <Image
          className="group-hover:translate-x-3 transition ease-in-out duration-300"
          src="/images/logo-white.svg"
          width={136}
          height={27}
          alt="Logo text"
        />
        <div className="flex absolute gap-1 h-[8px] top-[15px] left-[16px] items-end ">
          <div className="w-[4px] h-[8px]  group-hover:translate-y-1 group-hover:scale-y-50 bg-white rounded-md transition ease-in-out duration-300"></div>
          <div className="w-[4px] h-[8px]  group-hover:translate-y-1 group-hover:scale-y-50 bg-white rounded-md transition ease-in-out duration-300"></div>
        </div>
      </div>
      <nav className="">
        <ul id="menu" className="flex flex-col gap-6">
          <li className="active ">
            <Link href="/" className="flex relative items-center gap-4 pl-3">
              <Image
                src="/images/home.svg"
                width={27}
                height={24}
                alt="icon home"
              />
              Home
              <Image
                src="/images/border.svg"
                className="absolute right-[-10px]"
                width={117}
                height={98}
                alt=""
              />
            </Link>
          </li>
          <li className="group p-[10px]">
            <Link href="/" className="flex items-center gap-4 pl-3">
              <Image
                src="/images/wiz.svg"
                width={27}
                height={24}
                alt="icon wiz"
                className="brightness-0 invert group-hover:filter-none"
              />
              Wizards
              <Image
                src="/images/border.svg"
                className="hidden group-hover:inline-flex absolute right-0"
                width={117}
                height={98}
                alt=""
              />
            </Link>
          </li>
          <li className="group p-[10px]">
            <Link href="/" className="flex items-center gap-4 pl-3">
              <Image
                src="/images/magic-packages.svg"
                width={27}
                height={24}
                alt="icon magic-packages"
                className="brightness-0 invert group-hover:filter-none"
              />
              Pacotes Mágicos
              <Image
                src="/images/border.svg"
                className="hidden group-hover:inline-flex absolute right-0"
                width={117}
                height={98}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="fixed bottom-32">
        <Link
          className="flex items-center gap-3"
          href="https://www.linkedin.com/company/gaspers-ai/"
          target="_blank"
        >
          <Image
            src="/images/linkedin.svg"
            width={34}
            height={34}
            alt="Home logo"
          />
          <span>LinkedIn</span>
        </Link>
        <Link
          className="flex items-center gap-3 mt-5"
          href="https://www.instagram.com/Gaspers.ai/"
          target="_blank"
        >
          <Image
            src="/images/instagram.svg"
            width={34}
            height={34}
            alt="Home logo"
          />
          <span>Instagram</span>
        </Link>
      </div>
    </aside>
  )
}

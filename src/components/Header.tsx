import Image from 'next/image'
import Link from 'next/link'

export default function Header({ ...rest }) {
  return (
    <header
      {...rest}
      className="max-w-[1380px] col-span-8 row-span-2 relative text-sm font-medium text-[#ADBAC1] p-4 mb-[95px]"
    >
      <nav>
        <ul className="flex text-sm font-semibold gap-20 :only-child:hover">
          <li className="hover:text-[#9D63FE]">Benefícios</li>
          <li className="hover:text-[#9D63FE]">Vídeo Manifesto</li>
          <li className="hover:text-[#9D63FE]">Wizards</li>
          <li className="hover:text-[#9D63FE]">Depoimentos</li>
        </ul>
      </nav>
      <Link
        href="/"
        className="flex group justify-center items-center gap-4 rounded-b-xl shadow-md absolute top-0 right-0 w-[255px] h-[60px] text-base font-semibold bg-[#06C09D] text-white hover:h-[112px] "
      >
        <span className="relative group-hover:top-[27px] group-hover:left-[30px] ">
          Agendar call
        </span>
        <Image
          src="/images/schedule-call.svg"
          width={35}
          height={42}
          alt=""
          className="relative group-hover:top-[-20px] group-hover:right-[50px] "
        />
      </Link>
    </header>
  )
}

import Image from 'next/image'

interface CardTestimonyProps {
  userImg: string
  userName: string
  userOffice: string
  testimony: string
}

export default function CardTestimony({
  userImg,
  userName,
  userOffice,
  testimony,
}: CardTestimonyProps) {
  return (
    <div className="bg-[#EFF2F3] text-left border rounded-2xl w-56 h-[297px] px-4 pt-8 gap-7">
      <div className="grid grid-cols-4 mb-3">
        <Image
          className="col-span-1 row-span-2"
          src={userImg}
          width={65}
          height={65}
          alt=""
        />
        <div className="col-span-3">
          <h4 className="text-lg font-bold">{userName}</h4>
          <p className="text-sm font-medium text-[#adbac1]">{userOffice}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-[#7f8b91] leading-4">
        {testimony}
      </p>
    </div>
  )
}

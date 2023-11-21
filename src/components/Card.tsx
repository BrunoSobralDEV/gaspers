import Image from 'next/image'

interface CardProps {
  imagePath: string
  title: string
  text: string
  greenWords: string
}
export default function Card({
  imagePath,
  title,
  text,
  greenWords,
}: CardProps) {
  const applyColorToWords = (text: string, greenWords: string) => {
    const words = text.split(',')

    return words.map((word, index) => {
      let colorClass = ''

      if (greenWords && greenWords.includes(word)) {
        colorClass = 'text-green-500'
      }

      return (
        <span key={index} className={colorClass}>
          {word}
          {index < words.length - 1 && ' '}
        </span>
      )
    })
  }

  return (
    <div className="text-black group relative flex flex-col items-center  py-9 px-8 w-[240px] h-[293px] justify-center text-center">
      <div className="absolute border rounded-3xl w-full h-full bg-white  group-hover:scale-110 -z-10 transition-all ease-in-out duration-300"></div>
      <div className="flex flex-col items-center h-full justify-between">
        <Image src={imagePath} width={68} height={68} alt="" />
        <h3 className="text-[#9d63fe] text-[22px] font-semibold">{title}</h3>
        <p className="text-sm font-medium">
          {applyColorToWords(text, greenWords)}
        </p>
      </div>
    </div>
  )
}

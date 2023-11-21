import Aside from '@/components/Aside'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen w-full  ml-0 grid-rows-[min-content_max-content] overflow-hidden">
      <Aside />
      <Header />
      <Main className="col-span-8 row-span-3 p-4" />
      <Footer />
    </div>
  )
}

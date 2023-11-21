import Image from 'next/image'
import Button from './Button'
import Card from './Card'
import Youtube from './Youtube'
import CardTestimony from './CardTestimony'

export default function Main({ ...rest }) {
  return (
    <main {...rest} className="max-w-[1380px]">
      <div>
        <span className="text-[#06C09D] text-[22px] font-medium">
          GASPERS.AI
        </span>
        <h1 className="text-[65px] font-semibold leading-[72px] mb-11">
          Um assistente de <span className="text-[#06C09D]">conteúdo</span>
          <br />
          para o <span className="text-[#9D63FE]">marketing</span> da sua
          <br />
          empresa
        </h1>

        <p className="text-base font-medium max-w-md mb-7 leading-normal text-[#505a60]">
          Conheça a
          <span className="text-[#9D63FE]">inteligência artificial</span> que
          vai revolucionar o seu{' '}
          <span className="text-[#06C09D]">
            marketing, vendas e atendimento ao consumidor{' '}
          </span>
          e faça parte desta disrupção.
        </p>

        <Button
          className="flex relative group items-center text-white hover:pr-28 transition-all ease-in-out duration-300"
          style={{
            background: 'linear-gradient(90deg, #9d63fe 0%, #2a3b95 100%)',
          }}
        >
          Agendar Call
          <Image
            className="absolute -right-14 -rotate-45 group-hover:right-12 group-hover:rotate-0 transition-all ease-in-out duration-300"
            src="/images/schedule-call-1.svg"
            width={43}
            height={41}
            alt=""
          />
        </Button>
      </div>

      <div className="pt-52 pl-10">
        <span className="relative before:absolute before:bg-[url('/images/bg.svg')] before:w-[1432px] before:h-[1179px] before:-top-[32rem] before:-left-[4.5rem] before:-z-10"></span>
        <h2 className="text-4xl font-bold mb-4 text-white mt-9">
          <span className="text-[#06C09D]">8 horas</span> de trabalho
          <br />
          em <span className="text-[#9d63fe]">15 minutos</span>
        </h2>
        <p className="font-medium  text-white mb-11">
          Quer criar conteúdos inteligentes com eficiência?
          <br />É só dizer as
          <span className="text-[#06C09D]">palavras mágicas</span> para o
          Gaspers.ai.
        </p>

        <div className="w-full flex gap-3 justify-between mb-56">
          <Card
            imagePath="/images/learn-fast.svg"
            title="Aprende rápido"
            text="O Gaspers.ai precisa que você insira informações sobre a sua marca apenas uma vez para poder criar."
            greenWords="apenas uma vez"
          />
          <Card
            imagePath="/images/assertive.svg"
            title="É assertivo"
            text="Uma AI que entende sua marca, seus produtos e seu planejamento para criar com precisão."
            greenWords="AI com precisão"
          />
          <Card
            imagePath="/images/frame-2.svg"
            title="Economiza seu tempo"
            text="Com a ajuda do Gaspers.ai, você pode criar tarefas como um calendário inteiro de posts em apenas 60 segundos."
            greenWords="criar tarefas 60 segundos"
          />
        </div>

        <div className="flex justify-center mb-32">
          <Youtube videoId="LCcgW7s94zc?si=7xhxsL9PdK99XcTP" />
        </div>

        <div className="flex flex-col items-center justify-center mb-32">
          <h3 className="mb-11 text-4xl font-semibold">
            <p>
              Através dos <span className="text-[#9d63fe]">Wizards</span>, você
              dá vida aos mais
            </p>
            variados conteúdos em um{' '}
            <span className="text-[#06C09D]">passe de mágica</span>.
          </h3>
          <Image
            className="mb-20"
            src="/images/mini-cards.svg"
            width={879}
            height={228}
            alt="image cards"
          />
          <p className="mb-8 text-xl font-semibold">
            Um assistente criativo que você não vê, mas que{' '}
            <span className="text-[#9d63fe]">entrega tudo!</span>
          </p>
          <Button
            className="flex relative group items-center text-white hover:pr-28 transition-all ease-in-out duration-300"
            style={{
              background: 'linear-gradient(90deg, #9d63fe 0%, #2a3b95 100%)',
            }}
          >
            Descubra!
            <Image
              className="absolute -right-14 -rotate-45 group-hover:right-12 group-hover:rotate-0 transition-all ease-in-out duration-300"
              src="/images/schedule-call-1.svg"
              width={43}
              height={41}
              alt=""
            />
          </Button>
        </div>

        <div className="flex flex-col justify-center text-center mb-32">
          <h3 className="mb-5 text-4xl font-semibold">
            <p>Depoimentos sobre</p>
            <span className="text-[#06C09D]">Gaspers.ai</span>
          </h3>
          <p className="mb-8 text-xl font-semibold">
            Leia o que dizem as pessoas que já foram{' '}
            <span className="text-[#06C09D]">encantadas:</span>
          </p>

          <div className="flex justify-between">
            <CardTestimony
              userImg="/images/user-1.png"
              userName="Leonardo Putini"
              userOffice="Diretor de Arte Pleno"
              testimony="O que me impressiona na Gasper.ai é a facilidade de uso e a precisão dos resultados. Mesmo sem ser um especialista em inteligência artificial, eu consigo utilizar o programa sem dificuldades e obter informações valiosas para meu negócio."
            />
            <CardTestimony
              userImg="/images/user-2.png"
              userName="Felipe Boegéa"
              userOffice="Sócio-Fundador F2F"
              testimony="O que mais me surpreendeu foi a rapidez com que o Gasper.ai é capaz de processar informações. Ele é capaz de analisar grandes quantidades de dados em poucos segundos, o que nos permite tomar decisões mais rapidamente e com maior precisão."
            />
            <CardTestimony
              userImg="/images/user-3.png"
              userName="Fernanda Damaceno"
              userOffice="Coordenadora de Tráfego e Processos"
              testimony="O Gasper.ai é muito fácil de usar. Sua interface intuitiva e amigável torna a utilização da ferramenta muito simples, mesmo para aqueles que não têm muita experiência com tecnologia."
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center h-[352px] max-w-[1316px] -ml-[16%] rounded-r-[37px] bg-gradient-to-r from-[#402577] to-[#9d63fe] text-white mb-14">
          <span className="relative before:absolute before:bg-[url('/images/bg2.svg')] before:w-[522px] before:h-[663px] before:-top-[135px] before:-left-[487px] before:z-20"></span>
          <span className="relative before:absolute before:bg-[url('/images/img-border-top.png')] before:w-[57px] before:h-[62px] before:-top-[107px] before:z-10"></span>
          <div className="flex flex-col justify-center items-center p-9 -ml-20">
            <h3 className="text-4xl font-semibold pb-9 max-w-[610px]">
              Prove a sensação de tirar conteúdos da cartola
            </h3>
            <Button className="flex relative group items-center bg-white text-[#06C09D] hover:pr-36 hover:pl-24 hover:text-white hover:bg-[#06C09D] transition-all ease-in-out duration-300">
              Confira nossos pacotes mágicos!
              <Image
                className="absolute opacity-0 -right-14 -rotate-45 group-hover:opacity-100 group-hover:right-20 group-hover:rotate-0 transition-all ease-in-out duration-300"
                src="/images/icon-book-white.svg"
                width={43}
                height={41}
                alt=""
              />
            </Button>
          </div>
          <Image
            className="absolute top-12 right-12"
            src="/images/gasper-book-cartol.svg"
            width={224}
            height={262}
            alt=""
          />
          <span className="relative after:absolute after:bg-[url('/images/img-border-bottom.png')] after:w-[63px] after:h-[62px] after:-bottom-[107px] after:z-10"></span>
        </div>
      </div>

      <div className="flex justify-around mb-8">
        <ul className="text-sm font-normal text-center text-[#adbac1] space-y-4">
          <li className="text-base font-semibold text-[#7f8b91]">Home</li>
          <li>Benefícios</li>
          <li>Vídeo Manifesto</li>
          <li>Wizards</li>
          <li>Depoimentos</li>
        </ul>

        <ul className="text-sm font-normal text-center text-[#adbac1] space-y-4">
          <li className="text-base font-semibold text-[#7f8b91]">Wizards</li>
          <li>Wizards</li>
          <li>Em Breve</li>
        </ul>

        <ul className="text-sm font-normal text-center text-[#adbac1] space-y-4">
          <li className="text-base font-semibold text-[#7f8b91]">
            Pacotes Mágicos
          </li>
          <li>Básico</li>
          <li>Avançado</li>
          <li>Empresarial</li>
          <li>Empresarial+</li>
        </ul>
      </div>
    </main>
  )
}

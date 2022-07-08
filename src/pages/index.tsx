import Link from 'next/link';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';

const Home = () => {
  return (
    <div>
      <Topbar />
      <main>
        <div className='md:relative h-auto pb-10 md:h-[450px] lg:h-[600px] overflow-y-hidden flex flex-col gap-4'>
          <div className='md:absolute'>
            <video 
              className='w-full'
              autoPlay 
            >
              <source src='/video/banner.mp4' type='video/mp4'  />
            </video>
          </div>
          <div className='md:absolute md:bottom-0 w-[330px] md:w-full md:px-8 md:pb-4 mx-auto flex flex-col md:flex-row gap-4'>
            <Link href='/Crash'>
              <a>
                <img className='w-full rounded-3xl' src='/img/CRASH.png' alt="crash" />
              </a>
            </Link>
            <Link href='/Crash'>
              <a>
                <img className='w-full rounded-3xl' src='/img/JACKPOT.png' alt="crash" />
              </a>
            </Link>
            <Link href='/Crash'>
              <a>
                <img className='w-full rounded-3xl' src='/img/roleta.png' alt="crash" />
              </a>
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <img className='w-full' src="/img/BG.jpg" alt="bg" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;

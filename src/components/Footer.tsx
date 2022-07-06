import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between md:px-20 gap-4 items-center justify-center py-5 border-t border-yellow-500">
      <div>
        <Link href='/'>
          <a>
            <img className="w-20" src="/img/logo.png" alt="logo" />
          </a>
        </Link>
      </div>
      <div className='flex gap-2'>
        <FaFacebookSquare className="rounded-md text-xl" />
        <FaInstagramSquare className="rounded-md text-xl" />
        <FaTwitterSquare className="rounded-md text-xl" />
      </div>
    </footer>
  )
}

export default Footer;
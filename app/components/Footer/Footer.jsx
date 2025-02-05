import { RiExternalLinkFill } from 'react-icons/ri';
import { FaYoutube, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';
import { AiOutlineMobile } from 'react-icons/ai';

import FooterLinks from './components/FooterLinks';

export default function Footer() {
  const socialMedia = [
    {
      icon: <RiFacebookFill className="text-xl" />,
      href: '#',
      bgColor: 'bg-[#3b5998]',
    }, // Facebook Blue
    {
      icon: <ImInstagram className="text-xl" />,
      href: '#',
      bgColor: 'bg-[#5c7d99]',
    }, // Instagram Blue-Gray
    {
      icon: <FaYoutube className="text-2xl" />,
      href: '#',
      bgColor: 'bg-[#c4302b]',
    }, // YouTube Red
    {
      icon: <FaLinkedinIn className="text-2xl" />,
      href: '#',
      bgColor: 'bg-[#0077b5]',
    }, // LinkedIn Blue
    {
      icon: <FaPinterestP className="text-2xl" />,
      href: '#',
      bgColor: 'bg-[#bd081c]',
    }, // Pinterest Red
  ];

  return (
    <div className="w-full bg-[#f5f5f5]">
      <div className="container-sw relative z-10 py-10">
        {/* Above section */}
        <section className="grid auto-cols-fr grid-flow-col gap-28">
          {/* Need help, subscribe */}
          <div className="flex justify-between">
            {/* Need help */}
            <div className="flex flex-col">
              <strong>
                <span className="text-gray-sw text-[22px] font-bold">
                  Need help?
                </span>
              </strong>

              <a
                className="text-[30px] font-bold text-blue-sw hover:text-black-sw hover:underline hover:decoration-black-sw"
                href="#"
              >
                <span>Help Center</span>
              </a>
            </div>

            {/* Subscribe */}
            <div className="flex flex-col gap-1 leading-none">
              <span className="text-gray-sw text-[22px] font-bold">
                Subscribe
              </span>
              <a
                className="text-[20px] font-bold text-blue-sw hover:text-black-sw hover:underline hover:decoration-black-sw"
                href="#"
              >
                <span>
                  Wanna receive
                  <br /> email from us?
                </span>
              </a>
              <span className="text-gray-sw text-[13px]">
                <a
                  className="font-extralight text-blue-sw hover:text-black-sw hover:underline hover:decoration-black-sw"
                  href="#"
                >
                  Sign up
                </a>
                <span> to get the latest deals.</span>
              </span>
            </div>
          </div>

          {/* connect, mobile apps */}
          <div className="flex justify-between">
            {/* Connect */}
            <div className="flex flex-col">
              {/* connect */}
              <div className="flex gap-1">
                <span className="text-gray-sw text-[22px] font-bold">
                  Connect with us
                </span>
                <RiExternalLinkFill className="text-gray-sw relative top-1" />
              </div>

              {/* social media */}
              <div className="flex items-center gap-2">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    className={`${item.bgColor} ${item.bgColor === 'bg-[#0077b5]' ? 'rounded-sm' : 'rounded-full'} flex items-center justify-center p-[4px] text-lg text-white`}
                    href="#"
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile apps */}
            <div>
              <div className="mt-6 flex flex-col items-center gap-2 border-l pl-3 text-blue-sw">
                <AiOutlineMobile className="text-[3rem]" />
                <span className="text-[13px]"> Mobile Apps </span>
              </div>
            </div>
          </div>
        </section>

        {/* Link sections */}
        <section>
          <FooterLinks />
        </section>

        {/* copyright */}
        <section />
      </div>
    </div>
  );
}

import { RiExternalLinkFill } from 'react-icons/ri';
import { FaYoutube, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';
import { AiOutlineMobile } from 'react-icons/ai';

import FooterLinks from './components/FooterLinks';

export default function Footer({ isLinks }) {
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
                <span className="text-[22px] font-bold text-gray-sw">
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
              <span className="text-[22px] font-bold text-gray-sw">
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
              <span className="text-[13px] text-gray-sw">
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
                <span className="text-[22px] font-bold text-gray-sw">
                  Connect with us
                </span>
                <RiExternalLinkFill className="relative top-1 text-gray-sw" />
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
        {isLinks && (
          <section>
            <FooterLinks />
          </section>
        )}

        {/* copyright */}
        <section className="mt-5 border-t">
          <div className="pt-5 text-[11px] text-gray-sw">
            <p className="flex items-center">
              <span className="mr-1">
                <RiExternalLinkFill size={15} />
              </span>{' '}
              Indicates external site which may or may not meet accessibility
              guidelines
            </p>
            <div className="flex items-center justify-between">
              <p className="mt-4">
                © 2025 Southwest Airlines Co. All Rights Reserved. Use of the
                Southwest websites and our Company Information <br />{' '}
                constitutes acceptance of our
                <a
                  href="#"
                  className="text-blue-sw underline hover:text-black-sw"
                >
                  Terms and Conditions
                </a>{' '}
                <a
                  href="#"
                  className="text-blue-sw underline hover:text-black-sw"
                >
                  Privacy Policy
                </a>{' '}
                <a
                  href="#"
                  className="text-blue-sw underline hover:text-black-sw"
                >
                  Trademarks
                </a>{' '}
                <a
                  href="#"
                  className="text-blue-sw underline hover:text-black-sw"
                >
                  Do Not Sell/Share My Personal <br /> Information
                </a>
              </p>
              <div className="mt-4 flex justify-end gap-12 text-[9px]">
                <div className="flex flex-col items-end justify-end">
                  <img
                    src="/images/logo/southWestLogoBlue.svg"
                    alt=""
                    className="w-20"
                  />
                  <span className="pr-3 text-blue-sw">Business</span>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <img
                    src="/images/logo/southWestLogoBlue.svg"
                    alt=""
                    className="w-20"
                  />
                  <span className="pr-3 text-blue-sw">Cargo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

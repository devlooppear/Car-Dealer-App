import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <div className="bg-neutral-400 min-h-[3vh] w-full text-center text-neutral-50">
        <h2 className="font-semibold my-1">Car Dealer App</h2>
      </div>
      <footer className="flex flex-col justify-center align-middle items-center gap-5 mt-5 min-h-[15vh] text-neutral-600 font-semibold">
        <h2>Do you like this app?</h2>
        <h4>Let's Get in touch</h4>
        <ul className="flex gap-5">
          <li>
            <a target="_blank" href="https://discord.com/users/1041801570582528021">
              <FaDiscord className="text-neutral-600" style={{ fontSize: "38px" }} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/iago-silva-42130b209/">
              <FaLinkedin className="text-neutral-600" style={{ fontSize: "38px" }} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/devlooppear/">
              <FaInstagram className="text-neutral-600" style={{ fontSize: "38px" }} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5511945718620"
            >
              <FaWhatsapp className="text-neutral-600" style={{ fontSize: "38px" }} />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:iago.profissional.developer@gmail.com">
              <MdEmail className="text-neutral-600" style={{ fontSize: "38px" }} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

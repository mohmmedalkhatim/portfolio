import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaGithub } from 'react-icons/fa';
import { TbChevronLeft, TbMenu } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useheader } from '../context/header';
import { usePosts } from '../context/posts';

const Header = () => {
  const { value, update } = useheader();
  const post = usePosts((state) => state.active);
  const back = usePosts((state) => state.back);
  useGSAP(() => {
    gsap.from('.Name', { x: -20, opacity: 0 });
    gsap.from('.link', { x: -20, opacity: 0, stagger: 0.14 });
  }, []);

  const routes = [
    { name: 'main', route: '/' },
    { name: 'projects', route: '/projects' },
    { name: 'contacts', route: '/contacts' },
    { name: 'interest', route: '/interest' },
  ];
  return (
    <header className="w-full flex items-center fixed top-0 z-50 justify-between h-24 px-0 md:px-[5rem]">
      <div className="Name ml-12">Mohamed Alkhatm</div>
      {post && (
        <div className="postheader">
          <div className="p-4" onClick={back}>
            <TbChevronLeft />
          </div>
        </div>
      )}
      <nav className="sm:flex items-center hidden  justify-between gap-8 w-[20rem]">
        {routes.map((item, i) => (
          <div className="flex flex-col">
            {value === i ? (
              <div className=" rounded-md border-2 w-4 transition-opacity"></div>
            ) : (
              <div className="w-4 border border-[#12121200]"></div>
            )}
            <Link
              to={item.route}
              key={i}
              onClick={() => update(i)}
              className="link"
            >
              {item.name}
            </Link>
          </div>
        ))}
        <a href="https://github.com/mohmmedalkhatim" className="link">
          <FaGithub size={'2rem'} />
        </a>
      </nav>
      <nav className="pr-10 sm:hidden Name">
        <Menu>
          <MenuButton>
            <TbMenu size={'2rem'} />
          </MenuButton>
          <MenuItems className="flex bg-gray-500 flex-col p-8 rounded gap-4">
            <MenuItem>
              <Link to="/" className="font-light text-lg mt-8">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/projects" className="font-light text-lg">
                Projects
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contacts" className="font-light text-lg">
                Contacts
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>
    </header>
  );
};
export default Header;

import cn from '@/utils/cn';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import { TbHomeEco, TbHomeStats } from 'react-icons/tb';

const sectionContent = [
  {
    title: 'Buy a home',
    description:
      'Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.',
    icon: BiHomeSmile,
    url: '#',
  },
  {
    title: 'Rent a home',
    description:
      'Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.',
    icon: TbHomeEco,
    url: '#',
  },
  {
    title: 'Sell a home',
    description:
      'Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.',
    icon: TbHomeStats,
    url: '#',
  },
];

const MainFocusSection: React.FC = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="bg-secondary py-[70px] lg:py-[120px]">
      <div className="container space-y-4">
        <span className="badge">Our Services</span>
        <h2 className="section-title">Our Main Focus</h2>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sectionContent.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className="px-6 py-10 bg-white text-center space-y-4 group relative shadow rounded-sm"
            >
              <item.icon className="w-20 h-auto text-primary/90 mx-auto" />
              <h3 className="text-2xl font-extrabold hover:text-primary duration-150">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <Link
                href={item.url}
                className="text-sm font-semibold text-gray-500 flex items-center justify-center mx-auto group-hover:text-primary"
              >
                Find A Home <FaAngleRight className="ms-1 group-hover:ms-2 duration-200" />
              </Link>
              <div
                className={cn(
                  'absolute bottom-1 left-1 w-0 group-hover:w-[98%] h-[6px] duration-300 bg-primary',
                  { 'w-[98%]': active === index }
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFocusSection;

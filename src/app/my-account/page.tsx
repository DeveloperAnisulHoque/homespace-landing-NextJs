"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

import Breadcrumb from '@/components/Common/Breadcrumb';
import cn from '@/utils/cn';
import DashboardTab from '@/components/Tabs/DashboardTab';
import ProfileTab from '@/components/Tabs/ProfileTab';
import AddressTab from '@/components/Tabs/AddressTab';
import { PiPasswordDuotone } from 'react-icons/pi';
import ChangePasswordTab from '@/components/Tabs/ChangePasswordTab';

const tabs = [
  { name: 'Dashboard', slug: 'dashboard', icon: FaHome },
  { name: 'Address', slug: 'address', icon: FaLocationPin },
  { name: 'Profile', slug: 'profile', icon: FaUser },
  { name: 'Change Password', slug: 'change-password', icon: PiPasswordDuotone },
];

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  return (
    <div>
      <Breadcrumb title="My Account" pageName="Account" />
      <section className=" py-10 lg:py-28 bg-white">
        <div className="container flex flex-col  lg:flex-row  gap-4 lg:gap-10">
          <aside className="w-[320px]  border divide-y h-fit rounded overflow-hidden">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.slug)}
                className={cn(
                  'w-full p-4 text-gray-500 font-medium flex items-center justify-between gap-2 hover:text-primary focus:bg-primary focus:text-white duration-200',
                  {
                    'bg-primary text-white hover:text-white hover:opacity-90 duration-150': tab.slug === activeTab
                  }
                )}
              >
                <span className=''>

                {tab.name}
                </span>
                
                 <tab.icon />
              </button>
            ))}
          </aside>
          <div className="flex-1"
          >
            {activeTab === 'dashboard' && <DashboardTab/>}
            {activeTab === 'profile' && <ProfileTab/>}
            {activeTab === 'address' && <AddressTab/>}
            {activeTab === 'change-password' && <ChangePasswordTab/>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

'use client'

import { Flowbite, Footer } from 'flowbite-react'
import type { FC, PropsWithChildren } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { SidebarProvider, useSidebarContext } from '@/context/SidebarContext'
import classNames from 'classnames'
import theme from '@/flowbite-theme'
import HomeIcon from '../../../public/icons/home.svg'
import MyTeamIcon from '../../../public/icons/my-team.svg'
import HealthIcon from '../../../public/icons/health.svg'
import SettingsIcon from '../../../public/icons/settings.svg'

interface DashboardLayoutProps {
  isFooter?: boolean
}

const menu = {
  admin: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: HomeIcon,
    },
    {
      title: 'My Team',
      href: '/dashboard/my-team',
      icon: MyTeamIcon,
    },
    {
      title: 'Health & Wellbeing',
      href: '/dashboard/health',
      icon: HealthIcon,
    },
    {
      title: 'Account settings',
      href: '/dashboard/account-settings',
      icon: SettingsIcon,
    },
  ],
}
const ROLE = 'admin'

const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = function ({
  children,
  isFooter = false,
}) {
  return (
    <Flowbite theme={{ theme, dark: true }}>
      <SidebarProvider>
        <Navbar />
        <div className="flex items-start pt-16">
          <Sidebar menu={menu[ROLE]} />
          <MainContent isFooter={isFooter}>{children}</MainContent>
        </div>
      </SidebarProvider>
    </Flowbite>
  )
}

const MainContent: FC<PropsWithChildren<DashboardLayoutProps>> = function ({
  children,
  isFooter,
}) {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext()

  return (
    <main
      className={classNames(
        'overflow-y-auto relative w-full max-h-screen bg-slate-100',
        isSidebarOpen ? 'lg:ml-16' : 'lg:ml-64'
      )}
    >
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <MainContentFooter />
        </div>
      )}
    </main>
  )
}

const MainContentFooter: FC = function () {
  return (
    <>
      <Footer container>
        <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <Footer.LinkGroup>
            <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
              Terms and conditions
            </Footer.Link>
            <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="mr-3">
              Licensing
            </Footer.Link>
            <Footer.Link href="#" className="mr-3">
              Cookie Policy
            </Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup>
            <div className="flex gap-x-1">
              <Footer.Link
                href="#"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                Test
              </Footer.Link>
              <Footer.Link
                href="#"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                {/* <FaInstagram className="text-lg" /> */}
                Instagram
              </Footer.Link>
              <Footer.Link
                href="#"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                {/* <FaTwitter className="text-lg" /> */}
                Twitter
              </Footer.Link>
              <Footer.Link
                href="#"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                {/* <FaGithub className="text-lg" /> */}
                Github
              </Footer.Link>
              <Footer.Link
                href="#"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                {/* <FaDribbble className="text-lg" /> */}
                Test
              </Footer.Link>
            </div>
          </Footer.LinkGroup>
        </div>
      </Footer>
      <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
        &copy; 2019-2022 Flowbite.com. All rights reserved.
      </p>
    </>
  )
}

export default DashboardLayout

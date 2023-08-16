'use client'

import classNames from 'classnames'
import { Sidebar, useTheme } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useSidebarContext } from '@/context/SidebarContext'
import isSmallScreen from '@/helpers/is-small-screen'
import BurgerIcon from '../../../public/icons/burger.svg'
import CloseIcon from '../../../public/icons/close.svg'
import Image from 'next/image'

interface MenuProps {
  title: string
  href: string
  icon?: React.ReactNode
}

interface IProps {
  menu: MenuProps[]
}

const DashboardSidebar = ({ menu }: IProps) => {
  const theme = useTheme()
  const {
    isOpenOnSmallScreens: isSidebarOpenOnSmallScreens,
    setOpenOnSmallScreens,
  } = useSidebarContext()

  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const newPage = window.location.pathname

    setCurrentPage(newPage)
  }, [setCurrentPage])

  return (
    <div
      className={classNames('lg:!block', {
        hidden: !isSidebarOpenOnSmallScreens,
      })}
    >
      <div className="absolute top-2 left-6 z-50 hidden lg:block">
        <div className="min-h-[3rem] flex items-center">
          {isSidebarOpenOnSmallScreens && isSmallScreen() ? (
            <CloseIcon
              onClick={() =>
                setOpenOnSmallScreens(!isSidebarOpenOnSmallScreens)
              }
              className="mr-3 cursor-pointer lg:inline dark:svg-fill-white"
            />
          ) : (
            <BurgerIcon
              onClick={() =>
                setOpenOnSmallScreens(!isSidebarOpenOnSmallScreens)
              }
              className="mr-3 cursor-pointer lg:inline dark:path-white"
            />
          )}
          {!isSidebarOpenOnSmallScreens && (
            <Image
              alt=""
              src={`/icons/logo-${theme.mode}.svg`}
              className="mr-3"
              width={150}
              height={82}
            />
          )}
        </div>
      </div>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {menu.map((i: MenuProps) => (
                  <Sidebar.Item
                    key={i.href}
                    href={i.href}
                    icon={i.icon}
                    className={
                      i.href === currentPage
                        ? 'bg-gray-100 dark:bg-dark-indigo-600 dark:hover:bg-dark-indigo-500'
                        : ''
                    }
                  >
                    {i.title}
                  </Sidebar.Item>
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default DashboardSidebar

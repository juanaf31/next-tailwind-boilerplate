import type { CustomFlowbiteTheme } from 'flowbite-react'

const flowbiteTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      color: {
        primary:
          'bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300',
      },
      size: {
        xl: 'px-3 py-2 text-base rounded-md',
      },
    },
    icon: {
      off: 'rounded-full px-2 py-1',
    },
  },
  button: {
    color: {
      primary:
        'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
    },
    outline: {
      on: 'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit',
    },
    size: {
      md: 'text-sm px-3 py-2',
    },
  },
  dropdown: {
    floating: {
      base: 'z-10 w-fit rounded-xl divide-y divide-gray-100 shadow',
      content: 'rounded-xl text-sm text-gray-700 dark:text-gray-200',
      target: 'w-fit dark:text-white',
    },
    content: '',
  },
  modal: {
    content: {
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-800',
    },
    header: {
      base: 'flex items-start justify-between rounded-t px-5 pt-5',
    },
  },
  navbar: {
    root: {
      base: 'fixed lg:z-20 z-50 w-full bg-white border-b border-gray-200 dark:bg-dark-indigo-800 lg:dark:bg-white',
    },
  },
  sidebar: {
    root: {
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 -mt-[2px] dark:bg-dark-indigo-800',
      base: 'flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:bg-dark-indigo-800 dark:border-gray-700',
    },
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-dark-indigo-500',
      icon: {
        base: 'flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white dark:svg-fill-white',
      },
    },
  },
  textarea: {
    base: 'block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
  },
  toggleSwitch: {
    toggle: {
      checked: {
        off: '!border-gray-200 !bg-gray-200 dark:!border-gray-600 dark:!bg-gray-700',
      },
    },
  },
  footer: {
    root: {
      base: 'rounded-lg bg-white shadow md:flex md:items-center md:justify-between w-full p-6',
    },
    groupLink: {
      base: 'flex flex-wrap text-sm text-gray-500',
    },
  },
}

export default flowbiteTheme

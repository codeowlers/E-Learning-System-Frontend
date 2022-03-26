import React, { Fragment, useMemo } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CodeIcon,
  BriefcaseIcon,
  CameraIcon,
  PhotographIcon,
  UserIcon,
  CogIcon,
  MenuIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import MobileNav from './mobile-nav'

const categories = [
  {
    name: 'Development',
    // description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: CodeIcon,
  },
  {
    name: 'Business',
    // description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    name: 'Personal development',
    // description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'IT & Software',
    // description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Design',
    // description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: PhotographIcon,
  },
  {
    name: 'Photography & Video',
    // description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: CameraIcon,
  },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

const cart = {

  userID: '132',
  total: 150,
  courses: [
    {
      name: 'Help Center',
      price: '50$',
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      name: 'Help Center2',
      price: '50$',
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      name: 'Help Center3',
      price: '50$',
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
  ],

}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const profile = useSelector(state => state.profile)
  const router = useRouter()
  const reroute = useMemo(() => ({
    signIn() {
      router.push('/auth/sign-in')
    },
    signUp() {
      router.push('/auth/sign-up')
    },
    logout() {
      localStorage.clear()
      router.reload()
    },
    myAccount() {
      router.push('/my-account')
    },
    specific(route) {
      router.push(route)
    },
  }), [router])
  return (

    <Popover className="relative bg-white">

      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  )}
                >
                  <span>Categories</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {categories.map((category, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => reroute.specific(category.href)}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <category.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{category.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <button
            type="button"
            onClick={() => reroute.specific('teach-with-us')}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Teach With Us
          </button>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Docs
          </a>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">{resource.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>

{/* CART */}

<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          {/* <button
            type="button"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            onClick={reroute.signIn}
          >
              Sign in
          </button> */}

          {/* <button
            type="button"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={reroute.signUp}
          >
              Sign up
          </button> */}
           <Popover className="relative mr-40 mt-1">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none',
                  )}
                >

                  <ShoppingCartIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-6 w-6 group-hover:text-gray-500',
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {cart.courses.map((cart, index) => (
                          <a
                            key={index}
                            href={cart.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                          >

                            {/* <p className="text-base font-medium text-gray-900">{cart.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{cart.price}</p> */}
                            <div className="grid grid-cols-2 h-full w-full">
                              {/* <img className="w-24 h-16" src="/image.jpg" alt="ok" /> */}
                              <div className="w-28">
                              <img className="" src={cart.image} alt="" />
                              </div>

                              <div>
                                <div>
                                <p className="text-base font-medium text-gray-900">{cart.name}</p>
                                </div>
                                <div>
                                <p className="mt-1 text-sm text-gray-500">{cart.price}</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                        <hr />
                          <p className="text-base font-bold text-center text-gray-900">
                                {' '}
                                Total price:
                                {' '}
                                {cart.total}
                                {' '}
                                $
                          </p>
                         <button type="button" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Go to cart</button>
                      </div>

                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
           </Popover>
</div>
{/* CART END */}
    {!profile?.token

      ? (
      <div className="hidden md:flex items-center justify-end  lg:w-0">
          <button
            type="button"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            onClick={reroute.signIn}
          >
              Sign in
          </button>

          <button
            type="button"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={reroute.signUp}
          >
              Sign up
          </button>
      </div>
      ) : (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            My Account
        </a>

        <button
          type="button"
          onClick={reroute.logout}
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
            Logout
        </button>
        </div>
      )}

      </div>
      <MobileNav
        categories={categories}
        resources={resources}
        reroute={reroute}
        profile={profile}
      />
    </Popover>
  )
}

export default Navbar

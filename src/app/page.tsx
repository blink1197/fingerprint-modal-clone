'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Modal from '@/components/Modal'
import LogoCloud from '@/components/LogoCloud'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Use Cases', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Demo', href: '#' },
  { name: 'Pricing', href: '#' },
]

const features = [
  {
    name: 'Any browser, any device.',
    description:
      'Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Identify all anonymous visitors.',
    description:
      'Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.',
    icon: LockClosedIcon,
  },
  {
    name: 'Delight your trusted users.',
    description:
      'Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

const footerNavigation = {
  solutions: [
    { name: 'Hosting', href: '#' },
    { name: 'Data services', href: '#' },
    { name: 'Uptime monitoring', href: '#' },
    { name: 'Enterprise services', href: '#' },
    { name: 'Analytics', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Fingerprint</span>
              <img
                alt=""
                src="https://files.readme.io/e421089-small-FP-Horizontal-OrangeBlue2x.png"
                className="h-6 w-auto flex-shrink-0"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden xl:flex xl:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6  text-gray-900">
              <button className='p-2 text-[#008080] hidden xl:flex'>
                Log in
              </button>
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              <button className='p-2 border border-[#008080] rounded-md mx-2 text-[#008080]'>
                Contact Sales
              </button>
              <button className='p-2 border border-[#008080] bg-[#008080] rounded-md text-white mx-1'>
                Get started
              </button>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Fingerprint</span>
                <img
                  alt=""
                  src="https://files.readme.io/e421089-small-FP-Horizontal-OrangeBlue2x.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
          </div>
          <div className="py-24 lg:pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-5xl font-semibold text-gray-900 sm:text-5xl font-heading">Identify <span className="highlighted-text inline-block">Every Visitor</span></h1>
                <p className="mt-4 text-lg text-pretty text-gray-500 sm:text-xl/8">
                  Stop fraud, detect bots, or delight customers. Identify good and bad
                  visitors with industry-leading accuracy - even if they're anonymous.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#008080] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008080] "
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#008080]  shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008080] border-1 border-[#008080]  "
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
              <div className="mt-4 flow-root sm:mt-4">
                <Modal />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <LogoCloud />

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Build <span className='highlighted-text'>safe</span> and <span className='red-highlighted-text'>seamless</span> products
            </p>
            <p className="mt-6 text-lg/8 text-pretty text-gray-600">
              The device intelligence platform for visitor intent.
              Reduce friction for the good guys. Stop the bad guys.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 shadow-lg rounded-md py-2">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-2 left-2 flex size-10 items-center justify-center rounded-lg bg-[#034C58]">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>


      </main>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 px-6 lg:px-8 bg-[#052C43]">
        <div className="border-t border-gray-900/10 py-10">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 pl-20">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-200">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-300">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-200">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-300">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-200">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-300">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-200">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-300">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

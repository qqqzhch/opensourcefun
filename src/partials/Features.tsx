import React, { useEffect, useRef, useState } from 'react';

import Featurestalk from '../images/talk.png';
import FeaturesToken from '../images/token.jpeg';
import Featureswork from '../images/work.png';
import Transition from '../utils/Transition';

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs && tabs.current && tabs.current.children[tab]) {
      tabs.current.style.height = `${
        tabs.current.children[tab - 1].offsetHeight
      }px`;
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 mb-16 bg-gray-100"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-x-0 m-auto h-20 w-px -translate-y-1/2 bg-gray-200 p-px"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4">Our solutions</h1>
            <p className="text-xl text-gray-600">
              Taking into account the various requirements of open source and
              blockchain projects web3 projects, we implement the following
              solutions
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6">
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  Proof of work like Bitcoin, an open source project worker
                  during his involvement in an open source project that can
                  prove his work
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 1
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Automatic generation of CVs and JDs based on open source
                      projects
                    </div>
                    <div className="text-gray-600">
                      Say goodbye to fake CVs、 JDs
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 2
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      View technical and communication skills by analysing work
                      history
                    </div>
                    <div className="text-gray-600">
                      Communication and technology are both important when
                      working in a distributed office
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 3
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Issue token for open source projects
                    </div>
                    <div className="text-gray-600">
                      Bringing more rewards to open source workers by issuing
                      token
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="mx-auto rounded md:max-w-none"
                      src={Featureswork.src}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    {/* <img
                      className="animate-float absolute left-0 w-full md:max-w-none"
                      src={FeaturesElement.src}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '30%' }}
                    /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="mx-auto rounded md:max-w-none"
                      src={Featurestalk.src}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    {/* <img
                      className="animate-float absolute left-0 w-full md:max-w-none"
                      src={FeaturesElement.src}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '30%' }}
                    /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="mx-auto rounded md:max-w-none"
                      src={FeaturesToken.src}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    {/* <img
                      className="animate-float absolute left-0 w-full md:max-w-none"
                      src={FeaturesToken.src}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '30%' }}
                    /> */}
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

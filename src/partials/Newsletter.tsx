import React from 'react';

import fansImage from '../images/jsfanseth.jpeg';

function Newsletter() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative overflow-hidden rounded bg-gray-900 py-10 px-8 shadow-2xl md:py-16 md:px-12">
            {/* Background illustration */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="text-center lg:max-w-xl lg:text-left">
                <h3 className="h3 mb-2 text-white">OUR TEAM</h3>
                <p className="mb-6 text-lg text-gray-300">
                  Composition of developers active in the open source community
                </p>
                <div className="-m-4 flex flex-wrap">
                  <div className="p-4 md:w-1/2 lg:w-1/4">
                    <div className="flex h-full flex-col items-center text-center">
                      <img
                        alt="team"
                        className="mb-4  h-28 w-full shrink-0 rounded-lg object-cover object-center"
                        src={fansImage.src}
                      ></img>
                      <div className="w-full">
                        <h3 className="mb-3 text-gray-500">Jsfans.eth</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2 lg:w-1/4">
                    <div className="flex h-full flex-col items-center text-center">
                      <img
                        alt="team"
                        className="mb-4 h-28 w-full shrink-0 rounded-lg object-cover object-center"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                      ></img>
                      <div className="w-full">
                        <h3 className="mb-3 text-gray-500">ChatGpt </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

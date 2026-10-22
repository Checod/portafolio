export default function Profile(){
    return(
        <div className="w-5/6 text-wrap text-center mb-10 gap-2">
            <div className="flex flex-col lg-flex-row gap-4 items-center ">
              <div className="avatar avatar-online">
                  <div className="w-24 rounded-full">
                      <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                  </div>
              </div>
              <h1 className="text-xl lg:text-5xl font-bold text-warning">
                Hello World, <br />I'm Sergio!
              </h1>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>B.S. in Computer Science.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Software Developer Senior.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Practitioner in Data Engineer.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Experience developing software solutions with differents technologies.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Build software end-to-end involving design, programming & analysis.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Coordinated and participated in teams responsible for application development.</span>
              </li>
            </ul>
            <br />
            <div className="flex flex-row gap-4 items-center justify-center">
                <a href="https://github.com/Checod" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[30px] text-warning">
                        <path fill="var(--color-warning)" d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM223.7 96c-88.4 0-159.7 72.2-159.7 160.6 0 69.4 44.1 126.9 103.4 148.4 8.4 3.1 16.6-2.5 16.6-10.9l0-25c-4.4 1.9-10 3.1-15 3.1-20.6 0-32.8-11.2-41.6-32.2-3.4-8.4-7.2-13.4-14.4-14.4-3.7-.3-5-1.9-5-3.8 0-3.7 6.2-6.6 12.5-6.6 9.1 0 16.9 5.6 25 17.2 6.2 9.1 12.8 13.1 20.6 13.1s12.8-2.8 20-10c5.3-5.3 9.4-10 13.1-13.1-41.3-5-70.3-34.7-70.3-73.1 0-15.6 5.6-32.5 15-43.8-4.1-10.3-3.4-32.2 1.2-41.2 12.5-1.6 29.4 5 39.4 14.1 11.9-3.7 24.4-5.6 39.7-5.6s27.8 1.9 39.1 5.3c9.7-8.8 26.9-15.3 39.4-13.8 4.4 8.4 5 30.3 .9 40.9 10 11.9 15.3 27.8 15.3 44.1 0 38.4-29.1 67.5-70.9 72.8 10.6 6.9 17.8 21.9 17.8 39.1l0 32.5c0 9.4 7.8 14.7 17.2 10.9 56.6-21.6 100.9-78.1 100.9-148.1 0-88.4-71.9-160.6-160.3-160.6z"/>
                    </svg>    
                </a>
                <a href="www.linkedin.com/in/sergioarcs" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[30px]">
                        <path fill="var(--color-warning)" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
import React from 'react'

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-[#2e3856]">

      {/* ---------------------------------------------------------------------- */}
      {/* 1. DESKTOP VIEW                                                        */}
      {/* This section is visible ONLY on large screens (lg:flex)                */}
      {/* ---------------------------------------------------------------------- */}
      <div className="hidden lg:flex w-full h-full">
        {/* LEFT SIDE: Brand Hero Area */}
        <div className="w-1/2 relative flex flex-col justify-between overflow-hidden"
          style={{
            backgroundColor: '#a8b1ff',
            backgroundImage: 'url("/logo.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1
            className="absolute top-0 left-0 w-[300px] h-[112px] m-[53.750px] text-[44px] font-[700] [text-shadow:_0_0_0.2px_rgb(40,46,62)] leading-[56px] tracking-[0px] text-[rgb(40,46,62)] antialiased z-10 [word-spacing:-4px]"
            style={{ fontFamily: "'HurmeSans', sans-serif" }}
          >
            Smash sets in <br /> your sweats.
          </h1>

          <div className="mt-auto z-10">
            <img
              src="/quizlet.png"
              alt="Quizlet Logo"
              style={{
                marginLeft: '53.750px',
                marginBottom: '53.750px',
                width: '170.950px',
                height: '55.200px',
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE: The Scrollable Login Form */}
        <div className="w-1/2 flex flex-col items-center bg-white overflow-y-auto relative p-[16px]">
          {/* X Close Button */}
          <button className="absolute top-8 right-8 text-[#939bb4] hover:text-[#2e3856] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="w-full max-w-[485.5px] mt-12 mx-auto">
            {/* Header Tabs */}
            <div className="flex mb-10 items-end">
              <button
                className="text-[24px] font-[700] text-[#939bb4] hover:text-[#2e3856] transition-colors leading-none"
                style={{ width: '93px', marginRight: '32px', fontFamily: "'HurmeSans', sans-serif", letterSpacing: '-0.02em', textAlign: 'center' }}
              >
                Sign up
              </button>
              <div className="relative inline-flex flex-col items-center">
                <button
                  className="text-[24px] font-[700] text-[#2e3856] leading-none"
                  style={{ width: '93px', fontFamily: "'HurmeSans', sans-serif", letterSpacing: '-0.02em', textAlign: 'center' }}
                >
                  Log in
                </button>
                <img
                  src="/accents.svg"
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 w-full"
                  style={{ bottom: '-8px', height: 'auto', minWidth: '100px', pointerEvents: 'none' }}
                />
              </div>
            </div>

            {/* Social Buttons: Integrated with your specific CSS specs (1.6px border, 200px radius) */}
            <div className="flex flex-col mt-[16px] w-[488.7px] h-[216px] ">
              <div className="flex flex-col gap-[18px] mb-8 column-gap-[8px]">
                {[ { name: 'Google', icon: '/google.png' }, { name: 'Facebook', icon: '/fb.svg' }, { name: 'Apple', icon: '/apple.png' }].map((btn) => (
                  <button key={btn.name} className="flex items-center justify-center w-full h-[56px] w-[485.5px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#f6f7fb] rounded-[200px] border-[1.6px] border-transparent hover:bg-[#EDEBF4] transition-all group column-gap-[8px]">
                    <img src={btn.icon} className="w-[20px] h-[20px] mr-[12px]" alt="" />
                    <span className="text-[16px] font-[600] text-[#586380]" style={{ fontFamily: "'HurmeSans', sans-serif" }}> Log in with {btn.name} </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center my-10">
              <div className="flex-grow h-[1.5px] bg-[#f6f7fb]"></div>
              <span className="px-4 text-[14px] font-[580] text-[#586380]" style={{ fontFamily: "'HurmeSanslight', sans-serif" }}>or email</span>
              <div className="flex-grow h-[1.5px] bg-[#f6f7fb]"></div>
            </div>

            {/* Form */}
            <form className="space-y-[24px]">
              <div>
                <label className="block text-[12px] font-[700] text-[#586380] mb-2">Email</label>
                <input type="text" placeholder="Enter your email address or username" className="w-full h-[56px] px-4 bg-[#f6f7fb] rounded-[8px] border-[1.6px] border-transparent focus:border-[#A8B1FF] outline-none font-semibold" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[12px] font-[700] text-[#586380]">Password</label>
                  <button type="button" className="text-[12px] font-[700] text-[#4255ff]">Forgot password</button>
                </div>
                  <div className="relative">
                    <input type="password" placeholder="Enter your password" className="w-full h-[56px] px-4 pr-12 bg-[#f6f7fb] rounded-[8px] border-[1.6px] border-transparent focus:border-[#A8B1FF] outline-none transition-all placeholder:text-[#939bb4] text-[#2e3856] font-semibold" />
    
                    {/* This eye icon is built with a standard SVG so it works without any libraries */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                      <svg 
                        viewBox="0 0 24 24" 
                        width="20" 
                        height="20" 
                        stroke="#939bb4" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
              </div>
                <p className="text-[12px] text-[#939bb4] leading-[1.6]"> By clicking Log in, you accept Quizlet's <span className="text-[#586380] font-bold cursor-pointer">Terms of Service</span> and <span className="text-[#586380] font-bold cursor-pointer">Privacy Policy</span> </p>
              
              {/* Login Button */}
              <button className="w-full h-[64px] rounded-[200px] border-[1.6px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#4255ff] text-white rounded-[8px] font-[700] text-[18px] hover:bg-[#423ED8] transition-all shadow-sm" style={{ fontFamily: "'HurmeSans', sans-serif" }} > Log in </button>

              {/* Secondary Action */}
              <button className="w-full h-[64px] rounded-[200px] border-[1.6px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] border-[#F6F7FB] font-[650] text-[#586380] hover:bg-[#EDEBF4] transition-all" style={{ fontFamily: "'HurmeSansreg', sans-serif" }}>
                New to Quizlet? Create an account
              </button>
            </form>
            <button className="w-full text-center text-[#4255ff] font-bold py-4">Log in with magic link</button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 2. ANDROID / MOBILE VIEW                                               */}
      {/* This section is visible ONLY on small screens (flex lg:hidden)         */}
      {/* ---------------------------------------------------------------------- */}
      <div className="flex lg:hidden w-full flex-col bg-white overflow-y-auto p-6 relative">
        
        {/* Mobile Header: X Button + Centered Tabs aligned */}
        <div className="flex items-center justify-between mb-10 w-full mt-4">
          <div className="flex items-end gap-8 mx-auto translate-x-4">
            <button className="text-[24px] font-[700] text-[#939bb4]" style={{ fontFamily: "'HurmeSans', sans-serif" }}>Sign up</button>
            <div className="relative inline-flex flex-col items-center">
              <button className="text-[24px] font-[700] text-[#2e3856]" style={{ fontFamily: "'HurmeSans', sans-serif" }}>Log in</button>
              <img src="/accents.svg" alt="" className="absolute left-1/2 -translate-x-1/2 w-[110%]" style={{ bottom: '-10px', height: 'auto' }} />
            </div>
          </div>
          <button className="text-[#939bb4] p-2 leading-[0.8]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Form Content */}
        <div className="w-full max-w-sm mx-auto space-y-8">
          <div className="space-y-3">
            {['Google', 'Facebook', 'Apple'].map(name => (
              <button 
                key={name} 
                className="flex items-center justify-center w-full h-14 bg-[#f6f7fb] rounded-full border-[1.6px] border-transparent hover:bg-[#EDEBF4] transition-all gap-3"
                style={{ fontFamily: "'HurmeSans', sans-serif" }}>
                <img 
                  src={name === 'Google' ? '/google.png' : name === 'Facebook' ? '/fb.svg' : '/apple.png'} 
                  className="w-[20px] h-[20px]" 
                  alt="" 
                />
                <span className="text-[16px] font-[600] text-[#586380]">
                  Log in with {name}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="flex-grow h-[1px] bg-[#f6f7fb]"></div>
            <span className="px-4 text-[12px] font-bold text-[#586380]  tracking-widest">or email</span>
            <div className="flex-grow h-[1px] bg-[#f6f7fb]"></div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-[12px] font-bold text-[#586380] mb-2 ">Email</label>
              <input type="text" placeholder="Enter your email address or username" className="w-full h-14 px-4 bg-[#f6f7fb] rounded-lg border-b-[3px] border-transparent focus:border-[#ffcd1f] outline-none font-semibold" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-[12px] font-bold text-[#586380] ">Password</label>
                <button type="button" className="text-[12px] font-bold text-[#4255ff]">Forgot Password</button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-[56px] px-4 pr-12 bg-[#f6f7fb] rounded-[8px] border-b-[3px] border-transparent focus:border-[#ffcd1f] outline-none transition-all placeholder:text-[#939bb4] text-[#2e3856] font-semibold" 
                />
      
                {/* This eye icon is built with a standard SVG so it works without any libraries */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="#939bb4" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>       
            </div>

            {/* Mobile Terms: Centered, Soft Gray #616366 */}
            <p className="text-[12px] text-[#939bb4] text-center leading-relaxed" style={{ fontFamily: "'HurmeSans', sans-serif" }}>
              By clicking Log in, you accept Quizlet's <br />
              <span className="font-bold" style={{ color: '#586380' }}>Terms of Service</span> and <span className="font-bold" style={{ color: '#586380' }}>Privacy Policy</span>
            </p>

            <button className="w-full h-[48px] bg-[#4255ff] text-white rounded-full font-bold text-[18px] mb-4" style={{ fontFamily: "'HurmeSans', sans-serif" }}>Log in</button>
            <button className="w-full h-[48px]  bg-[#f6f7fb] text-[#586380] rounded-full font-bold mb-4 font-[650]" style={{ fontFamily: "'HurmeSansreg', sans-serif" }}>New to Quizlet? Create an account</button>
            <button className="w-full text-center text-[#4255ff] font-bold pb-4 mb-10" style={{ fontFamily: "'HurmeSansreg', sans-serif" }}>Log in with magic link</button>
          </form>
                  
        </div>
      </div>
    </div>
  )
}
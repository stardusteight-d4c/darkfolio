"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handlegradientShadowOnScroll)
    // executeAnimation();
    return () => {
      window.removeEventListener("scroll", handlegradientShadowOnScroll)
    }
  }, [])

  function handlegradientShadowOnScroll() {
    if (window.scrollY >= 100) {
      setIsGradientShadowOn(true)
    } else if (window.scrollY === 0) {
      setIsGradientShadowOn(false)
      // executeAnimation();
    } else {
      setIsGradientShadowOn(false)
    }
  }

  return (
    <nav
      className={`${
        isGradientShadowOn &&
        "bg-gradient-to-b from-[#020202] via-[#020202]/90 to-transparent"
      } fixed px-4 z-[1000] w-screen overflow-hidden inset-x-0 top-0`}
    >
      <div className="flex items-center max-w-[1032px] mx-auto justify-between py-8 ">
        <h2 className="font-bold text-[20px] tracking-[-1px] uppercase">
          Fevient
        </h2>
        <ul className="hidden sm:flex items-center gap-x-[40px]">
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="sm:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FFFFFF"
            viewBox="0 0 256 256"
          >
            <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
          </svg>
        </div>
      </div>
    </nav>
  )
}

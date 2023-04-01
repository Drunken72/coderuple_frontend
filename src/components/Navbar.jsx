import Image from "next/image"
import logo from "@/Images/logo.png"
import menu from "../SVG/menu.svg"
import { useState, useEffect } from "react";

const Navbar = () => {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(logo)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo(logo)
    } else {
      setNavbarLogo(logo)
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })

  return (
    // <nav className={navbar ? "navbar__container navbar__container__sticky" : "navbar__container navbar__container__absolute"}>
    //   <div className="responsive-container flex justify-between items-center ">
    //     <span className="font-semibold text-lg flex items-center gap-2 h-full py-4">
    //       <Image src={logo} height={30} />
    //       CODERUPLE
    //     </span>
    //     <Image src={menu} className="sm:hidden" />
    //     <div className="gap-4 hidden sm:flex">
    //       <span className="nav__links">Home</span>
    //       <div class="popover__wrapper">
    //         <a href="#">
    //           <h2 class="popover__title nav__links">Our Services</h2>
    //         </a>
    //         <div class="popover__content">
    //           <p class="popover__message">cHECHK</p>
    //         </div>
    //       </div>
    //       <span className="nav__links">Our Works</span>
    //       <span className="nav__links">Contact Us</span>
    //       <span className="nav__links">Careers</span>
    //     </div>
    //   </div>
    // </nav>
    <nav
      className={navbar ? "navbar__container navbar__container__sticky" : "navbar__container navbar__container__absolute"}
      data-te-navbar-ref>
      <div class="flex responsive-container flex-wrap items-center justify-between ">

        <span className="font-semibold text-lg flex items-center gap-2 h-full py-4">
          <Image src={logo} height={30} />
          CODERUPLE
        </span>

        <button
          class="block border-0 bg-transparent sm:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <div
          class="!visible hidden basis-[100%] items-center sm:!flex sm:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item>
          <ul
            class="flex sm:gap-4 flex-col sm:flex-row"
            data-te-navbar-nav-ref>
            <p className="nav__links"><a className=" underline">Home</a></p>
            <p className="nav__links"><a className=" underline">Our Services</a></p>
            <p className="nav__links"><a className=" underline">Our Works</a></p>
            <p className="nav__links"><a className=" underline">Contact Us</a></p>
            <p className="nav__links"><a className=" underline">Careers</a></p>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
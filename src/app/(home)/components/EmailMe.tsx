export function EmailMe() {
  return (
    <section id="contact" className="py-[100px]">
      <div className="max-w-[1032px] text-center lg:text-start px-4 lg:px-0 mx-auto">
        <span className="text-transparent bg-gradient-to-l from-[#f7ff00] to-[#ff00cc] bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]">
          Lets collab
        </span>
        <span className="block mt-1 text-[32px] md:text-[48px] !leading-[52.8px] !tracking-[-1px] font-semibold">
          Got a project? Lets talk
        </span>
        <a
          href="mailto:fernandasenactt@gmail.com"
          className="cursor-pointer group mx-auto md:mt-3 lg:mt-0 lg:mx-0 w-fit flex flex-col md:flex-row items-center gap-x-2 text-[32px] md:text-[48px] !leading-[52.8px] !tracking-[-1px] font-semibold"
        >
          <span className="group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-[#f7ff00] group-hover:to-[#ff00cc] group-hover:bg-clip-text">
            Email me
          </span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="fill-white w-[42px] h-[42px] md:w-[56px] md:h-[56px] group-hover:fill-[#f7ff00] mt-1 group-hover:rotate-[45deg] group-hover:translate-x-2 transition-all duration-200"
          >
            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

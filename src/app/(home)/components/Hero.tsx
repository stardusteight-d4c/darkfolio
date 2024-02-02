import Link from "next/link"

export function Hero() {
  return (
    <section className="pb-[100px] pt-[200px] px-4 relative h-fit overflow-hidden">
      <div id="container-stars" className="inset-0 pointer-events-none">
        <div id="stars"></div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="max-w-[1200px] z-50 h-fit w-full mx-auto">
        <div className="mx-auto w-fit gap-y-[19px] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="blur-shadow1 absolute -top-[20px] -left-[100px] md:-left-[300px] w-[32px] h-[32px] rounded-md" />
            <div className="blur-shadow2 absolute -bottom-[20px] -right-[100px] md:-right-[300px] w-[24px] h-[24px] rounded-md" />
            <div className="spinner w-[110px] h-[110px]">
              <div className="spinner1" />
            </div>
            <img
              src="assets/fernanda.png"
              className="absolute top-1 w-[100px] h-[100px] rounded-full object-fill"
            />
          </div>
          <span className="text-transparent bg-gradient-to-l from-[#f7ff00] to-[#ff00cc] bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]">
            Hi I'm Fernanda Sena
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-[50px] mdd:text-[72px] text-center mt-[20px] leading-[40.4px] md:!leading-[58.4px]  mdd:!leading-[86.4px] mx-auto w-full max-w-[350px] sm:max-w-[928px] font-semibold font-poppins !tracking-[-1px]">
          Building digital products, <br className="hidden sm:block" />
          &nbsp;brands, and experience.
        </h1>
        <p className="text-lg mt-[20px] w-full max-w-[350px] sm:max-w-[580px] mx-auto !leading-[28.8px] text-[#a1a3bb] text-center">
          I am a graphic designer from Brazil, focused on visual identities for
          brands and audiovisual media.
        </p>
        <Link
          href="https://www.linkedin.com/in/fercsena/"
          target="_blank"
          className="hover:scale-105 text-black z-50 cursor-pointer relative bg-gradient-to-b from-[#f7ff00] to-[#ff00cc] transition-all duration-300 rounded-full w-fit block py-3 px-8 active:scale-100 outline-none mx-auto mt-[40px]"
        >
          <strong>GET IN TOUCH</strong>
        </Link>
      </div>
    </section>
  )
}

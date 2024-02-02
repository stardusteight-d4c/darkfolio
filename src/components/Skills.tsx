import {
  photoshop,
  illustrator,
  afterEffects,
  figma,
  procreate,
} from '../assets'

export default function Skills() {
  return (
    <section className="pb-[150px] pt-[100px]">
      <div className="max-w-[1200px] px-4 mx-auto">
        <h2 className="text-[32px] block w-fit mx-auto !tracking-[-2px] font-medium !leading-[41.6px] font-poppins">
          Skills
        </h2>
        <div className="flex flex-col mdd:flex-row max-w-[1032px] items-center gap-y-6 mdd:justify-between mx-auto mt-[50px]">
          <img
            src={photoshop.src}
            alt=""
            className="w-[160px] h-[160px] hover:scale-105 cursor-default transition-all duration-300 object-cover rounded-[40px]"
          />
          <img
            src={illustrator.src}
            alt=""
            className="w-[160px] h-[160px] hover:scale-105 cursor-default transition-all duration-300 object-cover rounded-[40px]"
          />
          <img
            src={afterEffects.src}
            alt=""
            className="w-[160px] h-[160px] hover:scale-105 cursor-default transition-all duration-300 object-cover rounded-[40px]"
          />
          <img
            src={figma.src}
            alt=""
            className="w-[160px] h-[160px] hover:scale-105 cursor-default transition-all duration-300 object-cover rounded-[40px]"
          />
          <img
            src={procreate.src}
            alt=""
            className="w-[160px] h-[160px] hover:scale-105 cursor-default transition-all duration-300 object-cover rounded-[40px]"
          />
        </div>
      </div>
    </section>
  )
}

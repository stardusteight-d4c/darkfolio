import Link from "next/link"

interface ProjectCardProps {
  link: string
  image: string
  title: string
  subtitle: string
}

export function ProjectCard({
  link,
  image,
  title,
  subtitle,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="card-animate card border-[3px] border-white/10 overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[500px] h-[500px] group col-span-1 relative"
    >
      <img src={image} alt="cover/img" className="w-full h-full object-cover" />
      <b className="inset-x-0 transition-all bg-gradient-to-t from-[#020202]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
      <div className="content">
        <div className="title px-4 text-center">
          <span className="font-semibold text-2xl uppercase">{title}</span>
          <br />
          <span className="font-medium tracking-widest uppercase text-lg">
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  )
}

"use client"

import React, { useEffect, useRef, useState } from "react"
import anime from "animejs"

import { cardProjectData } from "@/shared/utils/data"

import { ProjectCard } from "./integrate/ProjectCard"

export function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (mounted) {
      handleObserver()
    }
  }, [mounted])

  const projectsSection = useRef<HTMLDivElement>(null)
  const boxes = [projectsSection]

  function handleObserver() {
    boxes.forEach((box) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "projects") {
              anime({
                targets: `#${entry.target.id}`,
                translateY: [100, 0],
                duration: 5000,
              })
            }
          }
        })
      })
      observer.observe(box.current!)
      return () => observer.disconnect()
    })
  }

  return (
    <section
      ref={projectsSection}
      id="projects"
      className="py-[100px] px-4 relative h-fit "
    >
      <div className="md:grid max-w-[1200px] flex flex-col grid-cols-2 gap-8 w-fit mx-auto">
        {cardProjectData.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <div className="card-animate card border-[3px] border-white/10 overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[1032px] h-[250px] group col-span-2 relative">
          <img
            src="assets/staart.gif"
            alt="cover/img"
            className="w-full h-full object-cover"
          />
          <b className="inset-x-0 transition-all bg-gradient-to-t from-[#020202]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
          <div className="content">
            <div className="title px-4 text-center">
              <span className="font-semibold text-2xl uppercase">Staart</span>
              <br />
              <span className="font-medium tracking-widest uppercase text-lg">
                Visual Identity
              </span>
            </div>
          </div>
        </div>
        {cardProjectData.slice(4, 8).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

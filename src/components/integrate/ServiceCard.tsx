import React from 'react'

interface Props {
  emoji: string
  title: string
  text: string
  index: number
}

export default function ServiceCard(props: Props) {
  return (
    <div className={`${props.index % 2 === 0 && 'mdd:mt-20'} bg-[#1c1924]/50 max-w-[300px] h-[250px] text-left w-full flex items-start justify-center flex-col px-[20px] rounded-3xl`}>
      <img
        src={props.emoji}
        alt=""
        className="w-[50px] h-[50px] ml object-cover"
      />
      <h2 className="text-2xl pb-3 pt-2 !leading-[27px] tracking-[-0.3px] font-semibold">
        {props.title}
      </h2>
      <p className="font-inter text-sm !leading-[21px] text-[#a1a3bb]">
        {props.text}
      </p>
    </div>
  )
}

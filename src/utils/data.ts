import { targetEmoji, paintEmoji, starEmoji } from '../assets'

interface ICardService {
  emoji: string
  title: string
  text: string
}

export const cardServiceData: ICardService[] = [
  {
    emoji: targetEmoji.src,
    title: 'Product Strategy',
    text: `Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.`,
  },
  {
    emoji: paintEmoji.src,
    title: 'Visual Design',
    text: `Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.`,
  },
  {
    emoji: starEmoji.src,
    title: 'Perfect Experience',
    text: `Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.`,
  },
]

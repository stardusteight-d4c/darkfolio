interface ICardService {
  emoji: string
  title: string
  text: string
}

interface ICardProject {
  image: string
  title: string
  subtitle: string
}

export const cardServiceData: ICardService[] = [
  {
    emoji: "assets/target-emoji.webp",
    title: "Product Strategy",
    text: `Defining the problem, identifying the scope and finally organizing the design roadmap to bring 100% of each project.`,
  },
  {
    emoji: "assets/paint-emoji.webp",
    title: "Visual Design",
    text: `Development of an identity that solves and visually represents the values and personality of the brand or project.`,
  },
  {
    emoji: "assets/star-emoji.webp",
    title: "Perfect Experience",
    text: `Through design, we create a personalized experience for your customer or product.`,
  },
]

export const cardProjectData: ICardProject[] = [
  {
    image: "assets/jordan.png",
    title: "Jordan",
    subtitle: "Illustration and Composition",
  },
  {
    image: "assets/arca.png",
    title: "Fundo Arca",
    subtitle: "Brand Identity",
  },
  {
    image: "assets/sushi-restaurant.png",
    title: "Music for a Sushi Restaurant",
    subtitle: "Poster",
  },
  {
    image: "assets/21pilots.png",
    title: "Twenty Øne Piløts The Icy Tour",
    subtitle: "Poster",
  },
  {
    image: "assets/hellfire.png",
    title: "Return of the Hellfire Club",
    subtitle: "Poster",
  },
  {
    image: "assets/mba.png",
    title: "MBA",
    subtitle: "Visual Identity",
  },
  {
    image: "assets/finbook.png",
    title: "Finbook by Finclass",
    subtitle: "Main Title",
  },
  {
    image: "assets/finalgirl.png",
    title: "Max Mayfield as The Final Girl",
    subtitle: "Poster",
  },
]

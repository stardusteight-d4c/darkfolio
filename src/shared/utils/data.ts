interface ICardService {
  emoji: string
  title: string
  text: string
}

interface ICardProject {
  link: string
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
    link: "https://www.behance.net/gallery/164108103/Jordan-Illustration-and-Composition",
    image: "assets/jordan.png",
    title: "Jordan",
    subtitle: "Illustration and Composition",
  },
  {
    link: "https://www.behance.net/gallery/163897527/Fundo-Arca-Brand-Identity",
    image: "assets/arca.png",
    title: "Fundo Arca",
    subtitle: "Brand Identity",
  },
  {
    link: "https://www.behance.net/gallery/167483513/Music-for-a-Sushi-Restaurant-Poster",
    image: "assets/sushi-restaurant.png",
    title: "Music for a Sushi Restaurant",
    subtitle: "Poster",
  },
  {
    link: "https://www.behance.net/gallery/154691399/Poster-Twenty-OEne-Piloets-The-Icy-Tour",
    image: "assets/21pilots.png",
    title: "Twenty Øne Piløts The Icy Tour",
    subtitle: "Poster",
  },
  {
    link: "https://www.behance.net/gallery/154691083/Poster-Return-of-the-Hellfire-Club",
    image: "assets/hellfire.png",
    title: "Return of the Hellfire Club",
    subtitle: "Poster",
  },
  {
    link: "https://www.behance.net/gallery/163895713/Identidade-Visual-MBA",
    image: "assets/mba.png",
    title: "MBA",
    subtitle: "Visual Identity",
  },
  {
    link: "https://www.behance.net/gallery/147348831/Main-Title-Finbook-by-Finclass",
    image: "assets/finbook.png",
    title: "Finbook by Finclass",
    subtitle: "Main Title",
  },
  {
    link: "https://www.behance.net/gallery/154690675/Poster-Max-Mayfield-as-The-Final-Girl",
    image: "assets/finalgirl.png",
    title: "Max Mayfield as The Final Girl",
    subtitle: "Poster",
  },
]

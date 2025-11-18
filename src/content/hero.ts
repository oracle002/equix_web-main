// src/content/hero.ts

export interface HeroContent {
  headline: {
    part1: string
    highlight1: string
    part2: string
    highlight2: string
  }
  subtext: string
  buttons: {
    outline: {
      text: string
      href: string
    }
    solid: {
      text: string
      href: string
    }
  }
  tags: string[]
}

export const heroContent: HeroContent = {
  headline: {
    part1: "Crafting Code with",
    highlight1: "Purpose",
    part2: "Powering Brands with",
    highlight2: "Vision",
  },
  subtext:
    "We turn bold ideas into digital realities—websites, apps, and brand stories engineered to spark engagement and scale with purpose.\nModernizing with meaning. Innovating with intention. Scaling with purpose.",
  buttons: {
    outline: {
      text: "Explore Our Work",
      href: "#showcase",
    },
    solid: {
      text: "Start Your Journey",
      href: "#contact",
    },
  },
  tags: ["Dream", "Design", "Develop"],
}
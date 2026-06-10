export interface Project {
  id: number
  name: string
  description: string
  descriptionHtml?: string
  category: string
  technologies: string[]
  status: 'Completed' | 'In Progress'
  featured: boolean
  link: string
  date: string
  award?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  id: number
  company: string
  role: string
  period?: string
  technologies: string[]
  bullets: string[]
}

export type NavSection = 'about' | 'skills' | 'experience' | 'projects' | 'contact'

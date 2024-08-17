export interface FilterProps {
  id: number
  title: string
  theme: string
  category: string
  description: string
  image: string
  video: string | null
  price: number
  slug: string
  featured: boolean
}

export interface FilterArray {
  products: FilterProps[]
}

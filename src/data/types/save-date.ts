export interface SaveDateProps {
  id: number
  title: string
  theme: string
  category: string
  description: string
  image: string
  video: string | null
  age: 'baby' | 'child' | '15age' | 'adult'
  price: number
  slug: string
  featured: boolean
}

export interface SaveDateArray {
  products: SaveDateProps[]
}

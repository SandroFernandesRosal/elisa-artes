export interface MemoryProps {
  id: number
  title: string
  theme: string
  category: string
  description: string
  image: string | null
  video: string | null
  age: 'baby' | 'child' | '15age' | 'adult'
  price: number
  slug: string
  featured: boolean
}

export interface InvitationArray {
  products: MemoryProps[]
}

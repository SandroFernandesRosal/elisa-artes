export interface FilterProps {
  id: number
  title: string
  theme: string
  category: string
  description: string
  image: string | null
  video: string | null
  price: number
  slug: string
  featured: boolean
}

export interface InvitationArray {
  products: FilterProps[]
}

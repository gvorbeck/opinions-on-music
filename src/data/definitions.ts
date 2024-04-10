export interface YearList {
  year: number
  albums?: Album[]
}

export interface Album {
  title: string
  artist: string
  genres: string[]
  links: Record<string, string>
  favoriteTrack: string
}

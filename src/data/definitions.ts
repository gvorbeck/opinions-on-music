export interface YearList {
  year: number
  albums?: Album[]
  playlist?: string
}

export interface Album {
  title: string
  artist: string
  genres?: string[]
  links?: {
    lastfm?: string
    spotify?: string
    genius?: string
    [key: string]: string | undefined
  }
  favoriteTrack?: string
}

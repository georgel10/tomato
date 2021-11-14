export interface IEntry {
  title: string;
  description: string;
  programType: 'series' | 'movie';
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export interface IEntryResponse {
  total: number;
  entries: IEntry[];
}

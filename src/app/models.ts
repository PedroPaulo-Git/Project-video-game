export interface Game {
    background_image:string;
    nome: string;
    released: string;
    description: string;
    website: string;
    metacritic: number;
    genres: Array<Genre>;
    parant_platforms:Array<ParentPlatform>;
    rating:Array<Rating>;
    publishers: Array<Publishers>;
    screenshots: Array<ScreenShorts>;
    trailers:Array<Trailer>;
 
}
export interface APIResponse<T>{
    results:Array<T>;
}
interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name:string;
}
}

interface Publishers {
  publisher: string;
}

interface ScreenShorts {
  image: string;
}
interface Rating {
    id:number,
    title:string,
    count:number
  
  }
interface Trailer {
  data:{
    max:string
  }
}

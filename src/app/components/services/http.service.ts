import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment as env } from '../environments/environment.prod';
import { Observable, forkJoin, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { APIResponse, Game } from 'src/app/models';


@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor( private http: HttpClient) { }
  getGamelist(
    ordering:string,
    search?:string,
  ):Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering',ordering);
    if (search){
      params = params.set('search',search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}`,{
      params:params,
    }
    );
  }
  getGameDetails(id:string):Observable<Game>{
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/${id}`);
    const gameTrailerRequest = this.http.get(`${env.BASE_URL}/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/${id}/screenshots`)

    return forkJoin({
      gameInfoRequest,
      gameTrailerRequest,
      gameScreenshotsRequest
    }).pipe(
      map((resp:any)=>{
        return {
          ...resp[`gameInfoRequest`],
          screenshots:resp[`gameScreenshotsRequest`]?.results,
          trailers:resp[`gameTrailerRequest`]?.results,
        }
      })
    );
  
  }
}

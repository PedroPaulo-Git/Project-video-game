import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment as env } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { APIResponse, Game } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }
  getGamelist(
    ordering:string,
    search?:string,
  ):Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering',ordering);
    if (search){
      params = new HttpParams().set("ordering",ordering).set('search',search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params:params,
    });
  }
}

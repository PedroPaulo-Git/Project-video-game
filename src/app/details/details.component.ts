import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { HttpService } from '../components/services/http.service';
import { Game } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
gameRating = 0;
gameId:string = ``;
game:Game | undefined ;
routeSub:Subscription | undefined;
gameSub:Subscription | undefined;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private httpService:HttpService,
  ){}

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.gameId = params['id'];
        this.getGameDetails(this.gameId);
      } else {
        console.log(`id não encontrado ${this.gameId}`);
      }
    });
  }
  
  getGameDetails(id:string):void{
    this.gameSub=this.httpService
    .getGameDetails(id)
    .subscribe((gameResp:Game)=>{
      this.game = gameResp;

      if (this.game !== undefined && this.game.metacritic !== undefined) {
        this.gameRating = this.game.metacritic;
      } else {
        console.log(`detatails dont found ${this.game}`);
      }
    })

    }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }
 
  }


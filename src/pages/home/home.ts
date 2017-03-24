import { Component } from '@angular/core';
import { GetRecentService } from '../../app/services/getrecent.service';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { SpecresultService } from '../../app/services/specresult.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ GetRecentService, SpecresultService ]
})
export class HomePage {
  Recent: any;

  constructor(
    public navCtrl: NavController,
    private recent: GetRecentService,
    private specresult: SpecresultService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit(){
    this.recent.getRecent().subscribe(recentShow => this.Recent = recentShow);
  }

  viewItem(item){
    let modal = this.modalCtrl.create(HomeModalContentPage , {spec_show: this.specresult.showSpecificShow(item)});

    modal.present();
  }
}
@Component({
    template:
    `<ion-header>
  <ion-toolbar>
    <ion-title>
      {{Show?.Title || Show?.title}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary">Vissza</span>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
      <ion-item>
        <ion-thumbnail item-left>
          <img src="{{Show?.Poster || Show?.poster}}">
        </ion-thumbnail>
        <ion-icon item-left name="easel"></ion-icon><h2>Első adás: ({{Show?.Released || Show?.released}})</h2>
        <p><b>Évadok:</b> {{Show?.totalSeasons || Show?.total_seasons}}<br><b>Műsoridő: </b> {{Show?.Runtime || Show?.runtime}}</p>
      </ion-item>
      <ion-item>
          <ion-icon item-left name="stats"></ion-icon><h2 text-wrap>Rating: <b>{{Show?.imdbRating || Show?.imdb_rating}}</b> [ {{Show?.imdbVotes || Show?.imdb_votes}} ] szavazat alapján.</h2>
      </ion-item>
      <ion-item text-wrap>
        <b>Rövid leírás:</b><br>
        {{Show?.Plot || Show?.plot}}
      </ion-item>
     <a ion-button block target="_blank" href="http://www.imdb.com/title/{{Show?.imdbID || Show?.imdb_i_d}}/">Bővebben az Imdb.com-on</a>
  </ion-list>
</ion-content>`
})
export class HomeModalContentPage {
  
Show: any;

  constructor(public platform: Platform,
  public viewCtrl: ViewController,
  public params: NavParams
    ){
      let response  = this.params.get('spec_show');
      response.subscribe(data =>{
       this.Show = data;
       err =>
       console.error(err);
      })
   }
    dismiss(){
    this.viewCtrl.dismiss();
  }

} 
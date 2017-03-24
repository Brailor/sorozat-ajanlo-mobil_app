import { Component } from '@angular/core';
import { SearchService } from '../../app/services/search.service';
import { NavController } from 'ionic-angular';
import { SearchResultsPage} from '../search-results/search.results';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [ SearchService, Toast ]
})
export class SearchPage {
    name: any;
    constructor(
      public navCtrl: NavController,
      public search: SearchService,
      private toast: Toast
      ) {}

      onSubmitSearch(){
        if(this.name !== ''){
            this.search.searchShow(this.name).subscribe(searchShows => {
               if(searchShows.Response === 'True'){
                  this.navCtrl.push(SearchResultsPage, searchShows.Search);
               }
               else{
                   //EZT A KOMMENTET A TESZTFÁZIS UTÁN TÖRÖLNI KELL!!
                    this.toast.show("Nincs ilyen találat", '2000', 'center').subscribe();
                    //alert('Nincs ilyen találat!');
               }
            });
        }
        else{
          this.toast.show('Nem hagyhatod üresen a mezőt!', '2000', 'center').subscribe();
        }
      }
}

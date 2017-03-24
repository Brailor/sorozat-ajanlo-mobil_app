import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoverService } from '../../app/services/discover.service';
import { DiscoverResultsPage } from '../discover-results/discover-results';
import { Toast } from '@ionic-native/toast';


@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
  providers: [ DiscoverService, Toast ]
})
export class DiscoverPage {
    date: string;
    genre: number;
    genres: Object[];
    dates: string[] = this.loadDates();

  constructor(
    public navCtrl: NavController,
    private discover : DiscoverService,
    private toast: Toast
   ){    
}

  ngOnInit(){
    this.genres = [{category : 'Akció & Kaland', id : 10759},{category: 'Animáció', id : 16}, {category: 'Dokumentum', id : 99},
    {category: 'Dráma', id: 18}, {category: 'Családi', id: 10751}, {category: 'Gyerek', id: 10762}, {category: 'Komédia', id : 35},
    {category: 'Hírek', id: 10763}, {category: 'Sci-fi & Fantasy', id: 10765}, {category: 'Krimi', id: 80}, {category: 'Misztikus', id: 9648},{category: 'Western', id: 37}];
    this.date = new Date().getFullYear().toString();
  }
  loadDates(){
    var dates = [];
    var max = new Date().getFullYear();
    var min = max - 17;
    for(var i = max; i >= min; i--) {
      
        dates.push(i.toString());
    }
    return dates;
  }
    
onSubmitDiscover(){
    const discoverData = {
      date : this.date,
      genre : this.genre
    }
    if(discoverData.genre !== undefined){
    this.discover.getDiscoveries(discoverData.date, discoverData.genre).subscribe(discoveredShows => {
       
        this.navCtrl.push(DiscoverResultsPage, discoveredShows.results);
      err =>{
        console.error(err);
        return false;
        }
      })
    }
    else{
      //alert("Nem választottál ki kategóriát!");
      this.toast.show("Nem választottál ki kategóriát!", '2000', 'center').subscribe();
    }
  }

 
}

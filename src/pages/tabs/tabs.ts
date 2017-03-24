import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { HomePage } from '../home/home';
import { DiscoverPage } from '../discover/discover';
import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html',
   providers: [ Toast ]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = SearchPage;
  tab4Root: any = ContactPage;

  constructor(private toast: Toast) {

  }
}

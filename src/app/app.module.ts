import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage, HomeModalContentPage  } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscoverPage } from '../pages/discover/discover';
import { DiscoverResultsPage, ModalContentPage } from '../pages/discover-results/discover-results';
import { SearchPage } from '../pages/search/search';
import { SearchResultsPage, SearchModalContentPage } from '../pages/search-results/search.results';


import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b0bb396d'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeModalContentPage,
    DiscoverPage,
    DiscoverResultsPage,
    ModalContentPage,
    SearchResultsPage,
    SearchPage,
    SearchModalContentPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeModalContentPage,
    DiscoverPage,
    DiscoverResultsPage,
    ModalContentPage,
    SearchResultsPage,
    SearchPage,
    SearchModalContentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

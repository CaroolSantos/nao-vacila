import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { HomePage } from '../pages/home/home';
import { RadarPage } from '../pages/radar/radar';
import { ConfigPage } from '../pages/config/config';
import { TabsPage } from '../pages/tabs/tabs';
import { CriarRotaPage } from '../pages/criar-rota/criar-rota';
import { EstatisticasPage } from '../pages/estatisticas/estatisticas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { OcorrenciaServicoProvider } from '../providers/ocorrencia-servico/ocorrencia-servico';
import { HttpModule } from '@angular/http';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { RotaServicoProvider } from '../providers/rota-servico/rota-servico';
import { NoticiaProvider } from '../providers/noticia/noticia';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { EstatisticasProvider } from '../providers/estatisticas/estatisticas';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { MeusRadaresPage } from '../pages/meus-radares/meus-radares';
import { RadarProvider } from '../providers/radar/radar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RadarPage,
    ConfigPage,
    TabsPage,
    LoginPage,
    CriarRotaPage,
    EstatisticasPage,
    MeusRadaresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'voltar'
    }),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RadarPage,
    ConfigPage,
    TabsPage,
    LoginPage,
    CriarRotaPage,
    EstatisticasPage,
    MeusRadaresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OcorrenciaServicoProvider,
    NativeGeocoder,
    RotaServicoProvider,
    NoticiaProvider,
    InAppBrowser,
    UsuarioProvider,
    EstatisticasProvider,
    Push,
    RadarProvider,
  ]
})
export class AppModule {}

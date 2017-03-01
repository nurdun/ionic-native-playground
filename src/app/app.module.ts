import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import Plugins from '../plugins';
import {GoogleMapComponent} from "../components/google-map/google-map";

let declarations = [
  MyApp,
  HomePage,
  GoogleMapComponent
];

let entryComponents = [
  MyApp,
  HomePage
];

Plugins.forEach(plugin => {
  declarations.push(plugin.component);
  entryComponents.push(plugin.component);
});

@NgModule({
  declarations,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents,
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

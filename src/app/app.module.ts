import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd.js';

import { HybridHelper } from './hybrid-helper.interface.v4';
import { AppComponent } from './app.component';
import { DocumentsService } from './documents-service.v4';




@NgModule({
  providers: [
  	DocumentsService 
  ],
  declarations: [
    AppComponent,
    DocumentsService
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents:    [ AppComponent ]
  /*,
  providers: [
  	DocumentsService 
  ],
  bootstrap: [AppComponent]*/
})
export class AppModule { 
	 ngDoBootstrap() {}
}

HybridHelper.downgradeProvider('myApp', 'DocumentsService', DocumentsService);
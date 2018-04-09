import { Component, Inject } from '@angular/core';
import { HybridHelper } from './hybrid-helper.interface.v4';
import { DocumentsService } from './documents-service.v4';
const myServices = [
    HybridHelper.buildProviderForUpgrade('ng1Service2')
]

@Component({
  selector: 'app-root',
  providers: [
        myServices
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( @Inject('ng1Service2') ng1Service2 ) {
      this.name = ng1Service2.testNG1Service2Function();
   }

   name = 'Angular 4';
}
HybridHelper.downgradeComponent('myApp', 'appRoot', AppComponent);
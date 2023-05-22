import { NgModule } from '@angular/core';
import { PinglinkUiLibComponent } from './pinglink-ui-lib.component';
import { PLButtonModule } from './button/button.module';



@NgModule({
  declarations: [
    PinglinkUiLibComponent,
  ],
  imports: [
    PLButtonModule
  ],
  exports: [
    PinglinkUiLibComponent,
    PLButtonModule,
  ]
})
export class PinglinkUiLibModule { }

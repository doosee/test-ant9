import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


@NgModule({
  imports: [WelcomeRoutingModule, NzAvatarModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

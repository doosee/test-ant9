import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { NzAvatarModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [TestComponent],
  imports: [
    NzAvatarModule
  ],
  exports: [TestComponent]
})
export class TestModule { }

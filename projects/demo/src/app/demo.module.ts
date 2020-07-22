import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoComponent } from './demo.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, SidebarModule.forRoot()],
  bootstrap: [DemoComponent],
})
export class DemoModule {}

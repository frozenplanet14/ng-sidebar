import { NgModule, ModuleWithProviders } from '@angular/core';
import { SidebarContainer } from './sidebar-container.component';
import { Sidebar } from './sidebar.component';
import { CloseSidebar } from './close.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SidebarContainer, Sidebar, CloseSidebar],
  imports: [CommonModule],
  exports: [SidebarContainer, Sidebar, CloseSidebar]
})
export class SidebarModule {
  static forRoot(): ModuleWithProviders<SidebarModule> {
    return {
      ngModule: SidebarModule
    };
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SidebarComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SpinnerComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './app/shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './app/shared/pages/contactPage/contactPage.component';
// import { HomePageComponent } from './app/shared/pages/homePage/homePage.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./app/countries/countries.module').then((m) => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

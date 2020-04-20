import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileAtmComponent } from './components/mobile-atm/mobile-atm.component';
import { VirtualAtmComponent } from './components/virtual-atm/virtual-atm.component';


const routes: Routes = [
  { path: '', component: VirtualAtmComponent },
  { path: 'mobile-atm', component: MobileAtmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

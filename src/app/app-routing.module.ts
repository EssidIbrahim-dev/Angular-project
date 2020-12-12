import { HomeScrollComponent } from './dashboard/home-scroll/home-scroll.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { WomenScrollComponent } from './dashboard/women-scroll/women-scroll.component';
import { MenScrollComponent } from './dashboard/men-scroll/men-scroll.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { ProductListComponent } from './dashboard/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EnfantComponent } from './enfant/enfant.component';
import { FemmeComponent } from './femme/femme.component';
import { HommeComponent } from './homme/homme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full',canActivate: [AuthGuard]},
  {path: 'dashboard' , component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'men', component: HommeComponent},
  {path: 'women', component: FemmeComponent},
  {path: 'enfant', component: EnfantComponent},
  {path: 'login', component: LogInComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'dashboard/users' , component: UserListComponent,canActivate: [AuthGuard]},
  {path: 'dashboard/products' , component: ProductListComponent,canActivate: [AuthGuard]},
  {path: 'dashboard/menscrolls' , component: MenScrollComponent,canActivate: [AuthGuard]},
  {path: 'dashboard/womenscrolls' , component: WomenScrollComponent,canActivate: [AuthGuard]},
  {path: 'dashboard/homescrolls' , component: HomeScrollComponent,canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

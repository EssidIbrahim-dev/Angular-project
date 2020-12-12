import { MatTableModule } from '@angular/material/table';

import { FooterDashComponent } from './dashboard/footer-dash/footer-dash.component';
import { AdminRoutingModule } from './dashboard/admin.routing.module';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenCarouselComponent } from './components/men-carousel/men-carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { HomeComponent } from './home/home.component';
import { HommeComponent } from './homme/homme.component';
import { FemmeComponent } from './femme/femme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgxButtonModule, IgxCarouselModule, IgxIconModule, IgxInputGroupModule, IgxListModule } from 'igniteui-angular';
import { CardComponent } from './card/card.component';
import { GalleryModule } from 'ng-gallery';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBRootModule, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import 'hammerjs';
import { HeaderClientComponent } from './header-client/header-client.component';
import { ProductListComponent } from './dashboard/product-list/product-list.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateProductComponent } from './dashboard/update-product/update-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { UpdateUserComponent } from './dashboard/update-user/update-user.component';
import { UserDetailComponent } from './dashboard/user-detail/user-detail.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { AvatarModule } from 'ngx-avatar';
import { MenScrollComponent } from './dashboard/men-scroll/men-scroll.component';
import { WomenScrollComponent } from './dashboard/women-scroll/women-scroll.component';
import { AddMenScrollComponent } from './dashboard/add-men-scroll/add-men-scroll.component';
import { AddWomenScrollComponent } from './dashboard/add-women-scroll/add-women-scroll.component';
import { UpdateMenScrollComponent } from './dashboard/update-men-scroll/update-men-scroll.component';
import { UpdateWomenScrollComponent } from './dashboard/update-women-scroll/update-women-scroll.component';
import { ShowMenScrollComponent } from './dashboard/show-men-scroll/show-men-scroll.component';
import { ShowWomenScrollComponent } from './dashboard/show-women-scroll/show-women-scroll.component';
import { WomenCarouselComponent } from './components/women-carousel/women-carousel.component';
import { HomeScrollComponent } from './dashboard/home-scroll/home-scroll.component';
import { AddHomeScrollComponent } from './dashboard/add-home-scroll/add-home-scroll.component';
import { UpdateHomeScrollComponent } from './dashboard/update-home-scroll/update-home-scroll.component';
import { ShowHomeScrollComponent } from './dashboard/show-home-scroll/show-home-scroll.component';
@NgModule({
  declarations: [
    AppComponent,
    SlideHomeComponent,
    HomeComponent,
    HommeComponent,
    FemmeComponent,
    EnfantComponent,
    PageNotFoundComponent,
    FooterComponent,
    CardComponent,
    LogInComponent,
    RegisterComponent,
    MenCarouselComponent,
    ProductComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HeaderClientComponent,
    FooterDashComponent,
    ProductListComponent,
    UserListComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    UpdateUserComponent,
    UserDetailComponent,
    AddUserComponent,
    MenScrollComponent,
    WomenScrollComponent,
    AddMenScrollComponent,
    AddWomenScrollComponent,
    UpdateMenScrollComponent,
    UpdateWomenScrollComponent,
    ShowMenScrollComponent,
    ShowWomenScrollComponent,
    WomenCarouselComponent,
    HomeScrollComponent,
    AddHomeScrollComponent,
    UpdateHomeScrollComponent,
    ShowHomeScrollComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IgxCarouselModule,
		IgxListModule,
		IgxInputGroupModule,
		IgxIconModule,
    IgxButtonModule,
    GalleryModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FontAwesomeModule,
    MDBRootModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatTableModule,
    AvatarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { VenueService } from './venue.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserXhr, HttpModule } from '@angular/http';
import { AuthServiceService } from './auth-service.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { FeaturedVenuesComponent } from './featured-venues/featured-venues.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserTypeComponent } from './register/user-type/user-type.component';
import { PersonalComponent } from './register/user-type/personal/personal.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { VenueComponent } from './register/user-type/venue/venue.component';
import { VenueLoginComponent } from './venue-login/venue-login.component';
import { VenuecardComponent } from './venuecard/venuecard.component';
import { CustomerDashSearchComponent } from './customer-dash-search/customer-dash-search.component';
import {MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchPanelComponent,
    FeaturedVenuesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserTypeComponent,
    PersonalComponent,
    CustomerDashboardComponent,
    VenueComponent,
    VenueLoginComponent,
    VenuecardComponent,
    CustomerDashSearchComponent

  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'register/personal', component: PersonalComponent },
        {path: 'customerdash', component: CustomerDashboardComponent},
        {path: 'register/venue', component: VenueComponent},
        {path: 'userType', component: UserTypeComponent},
        {path: 'venue/login', component: VenueLoginComponent}
      ]
    )
  ],
  providers: [
    AuthServiceService,
    VenueService,
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

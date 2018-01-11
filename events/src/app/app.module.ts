import { StaffLoginComponent } from './staff-login/staff-login.component';
import { VenueService } from './venue.service';
import { EventService } from './event.service';
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
import {MatSliderModule} from '@angular/material';
import { CustomerDashResultsComponent } from './customer-dash-results/customer-dash-results.component';
import { CustomerDashMapComponent } from './customer-dash-map/customer-dash-map.component';
import { AgmCoreModule } from '@agm/core';
import { CustomerVenueDetailsComponent } from './customer-venue-details/customer-venue-details.component';
import { StaffComponent } from './register/user-type/staff/staff.component';
import { StaffDashComponent } from './staff-dash/staff-dash.component';
import { StaffService } from './staff.service';
import { StaffDashHeaderComponent } from './staff-dash-header/staff-dash-header.component';


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
    CustomerDashSearchComponent,
    CustomerDashResultsComponent,
    CustomerDashMapComponent,
    CustomerVenueDetailsComponent,
    StaffComponent,
    StaffLoginComponent,
    StaffDashComponent,
    StaffDashHeaderComponent

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
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0tVghwOmKob4vZP7nD6G7foly8sPbScs'
    }),
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'register/personal', component: PersonalComponent },
        {path: 'customerdash', component: CustomerDashboardComponent},
        {path: 'register/venue', component: VenueComponent},
        {path: 'userType', component: UserTypeComponent},
        {path: 'venue/login', component: VenueLoginComponent},
        {path: 'venue/details', component: CustomerVenueDetailsComponent},
        {path: 'register/staff', component: StaffComponent},
        {path: 'staff/login', component: StaffLoginComponent},
        {path: 'staffDash', component: StaffDashComponent}
      ]
    )
  ],
  providers: [
    AuthServiceService,
    VenueService,
    StaffService,
    EventService,
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

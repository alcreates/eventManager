import { BrowserXhr, HttpModule } from '@angular/http';
import { AuthServiceService } from './auth-service.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
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
import { FormsModule } from '@angular/forms';

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
    PersonalComponent

  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'register/personal', component: PersonalComponent }
      ]
    )
  ],
  providers: [
    AuthServiceService,
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

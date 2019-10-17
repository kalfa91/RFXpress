import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ColisComponent } from './colis/colis.component';
import { ColisFormComponent } from './colis-form/colis-form.component';
import { ColisListComponent } from './colis-list/colis-list.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SingleColisComponent } from './single-colis/single-colis.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './service/auth-guard.service';
import {ColisService} from './service/colis.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    ColisComponent,
    ColisFormComponent,
    ColisListComponent,
    HeaderComponent,
    IndexComponent,
    SingleColisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'colis',   component: ColisComponent
      },
      { path: 'colis/new', component: ColisFormComponent },
      { path: 'books/view/:id', component: SingleColisComponent },
      {
        path: 'accueil', canActivate: [AuthGuardService], component: ColisListComponent
      },
      { path: 'auth/signup', component: SignupComponent },
      { path: 'auth/signin', component: SigninComponent },
      {
        path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index'},
    ])
  ],
  providers: [AuthService, ColisService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

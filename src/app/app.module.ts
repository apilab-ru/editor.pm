import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { EditorComponent } from './editor/editor.component';
import { CabinetComponent } from './cabinet/cabinet.component';

import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';

// import { TemplatesService } from './templates.service';
// import { BookService } from './book.service';

import { TemplatesService  } from './_services/templates.service';
import { BookService  } from './_services/book.service';
import { UserService  } from './_services/user.service';

import { AuthComponent } from './auth/auth.component';
// import { UserService } from './user.service';

import { CookieService } from 'ngx-cookie-service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { ModalComponent } from './modal/modal.component';

import { ModalService } from './_services/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    EditorComponent,
    CabinetComponent,
    Error404Component,
    AuthComponent,
    ModalComponent
  ],
  providers: [TemplatesService, BookService, UserService,  CookieService, ModalService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpHeadersInterceptor,
      multi:true 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

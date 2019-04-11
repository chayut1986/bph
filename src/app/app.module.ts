import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { DrugallergyComponent } from './drugallergy/drugallergy.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './api/product.service';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    DrugallergyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    { provide: 'API_URL', useValue: environment.apiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { HttpClientModule } from '@angular/common/http';
import { MatrixService } from './matrix.service';
import { XparGateway } from './gateway/xpar.gateway';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ XparGateway, MatrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }

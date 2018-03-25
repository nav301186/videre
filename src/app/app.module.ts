import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MatrixService } from './matrix.service';
import { XparGateway } from './gateway/xpar.gateway';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ XparGateway, MatrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }

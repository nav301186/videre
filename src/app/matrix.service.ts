import { Injectable } from '@angular/core';
import { XparGateway } from './gateway/xpar.gateway';
import { Observable } from "rxjs/Observable";
import { Stat } from './stat';

@Injectable()
export class MatrixService {

  constructor( private _gateway: XparGateway ) { }

  getPairingStats() : Observable<Stat[]>{
    return this._gateway.pairingStats();
  }

}

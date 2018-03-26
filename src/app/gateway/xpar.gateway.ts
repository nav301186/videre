import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IStat } from '../istat';
import { Stat } from '../stat';


@Injectable()
export class XparGateway {

 httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};
  constructor( private _http: HttpClient) { }

  pairingStats() : Observable<Stat[]>  {
    return this._http.get<Stat[]>("http://localhost:4000/api/teams/E2G/pairing-matrix" );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class XparGateway {

  constructor( private _http: HttpClient) { }

  pairingStats(){
    return this._http.get("http://localhost:4000/api/pairing-matrix")
      .map(result => result);
  }

}

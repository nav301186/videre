import { Injectable } from '@angular/core';
import { XparGateway } from './gateway/xpar.gateway';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Stat } from './stat';

@Injectable()
export class MatrixService {

  constructor( private _gateway: XparGateway ) { }

  getPairingStats() : Observable<Stat[]>{
    return this._gateway.pairingStats();
  }

  dummyData() : Observable<Stat[]>{
    // let stats = [
    //   new Stat("naveen","anup",4,33),
    //   new Stat("naveen","nelson",1,33),
    //   new Stat("naveen","ben",1,33),
    //   new Stat("ben","ben",5,33),
    //   new Stat("ben","ben",5,33),
    //   new Stat("manu","manu",5,33),
    // ];
    let stats = this.get_response();
    return Observable.of(stats);
  }

  get_response(){
    return JSON.parse(JSON.stringify([
    {
        "second_pair": "anup",
        "percent": 16.901408450704224,
        "first_pair": "anup",
        "days_paired": 12
    },
    {
        "second_pair": "ben",
        "percent": 1.4084507042253522,
        "first_pair": "anup",
        "days_paired": 1
    },
    {
        "second_pair": "daniel",
        "percent": 1.4084507042253522,
        "first_pair": "anup",
        "days_paired": 1
    },
    {
        "second_pair": "nelson",
        "percent": 4.225352112676056,
        "first_pair": "anup",
        "days_paired": 3
    },
    {
        "second_pair": "sabrina",
        "percent": 2.8169014084507045,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 4.225352112676056,
        "first_pair": "anup",
        "days_paired": 3
    },
    {
        "second_pair": "nelson",
        "percent": 2.8169014084507045,
        "first_pair": "ashish",
        "days_paired": 2
    },
    {
        "second_pair": "ben",
        "percent": 7.042253521126761,
        "first_pair": "ben",
        "days_paired": 5
    },
    {
        "second_pair": "koustubh",
        "percent": 2.8169014084507045,
        "first_pair": "ben",
        "days_paired": 2
    },
    {
        "second_pair": "sabrina",
        "percent": 1.4084507042253522,
        "first_pair": "ben",
        "days_paired": 4
    },
    {
        "second_pair": "serdar",
        "percent": 2.8169014084507045,
        "first_pair": "ben",
        "days_paired": 2
    },
    {
        "second_pair": "anup",
        "percent": 5.633802816901409,
        "first_pair": "koustubh",
        "days_paired": 4
    },
    {
        "second_pair": "nelson",
        "percent": 1.4084507042253522,
        "first_pair": "daniel",
        "days_paired": 1
    },
    {
        "second_pair": "ashish",
        "percent": 7.042253521126761,
        "first_pair": "anup",
        "days_paired": 5
    },
    {
        "second_pair": "nelson",
        "percent": 1.4084507042253522,
        "first_pair": "koustubh",
        "days_paired": 10
    },
    {
        "second_pair": "nelson",
        "percent": 14.084507042253522,
        "first_pair": "nelson",
        "days_paired": 10
    },
    {
        "second_pair": "sabrina",
        "percent": 7.042253521126761,
        "first_pair": "sabrina",
        "days_paired": 5
    },
    {
        "second_pair": "serdar",
        "percent": 15.492957746478872,
        "first_pair": "serdar",
        "days_paired": 11
    }
]))
  }

}

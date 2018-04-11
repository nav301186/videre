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
        "percent": 16.363636363636363,
        "first_pair": "anup",
        "days_paired": 36
    },
    {
        "second_pair": "ben",
        "percent": 0.45454545454545453,
        "first_pair": "anup",
        "days_paired": 1
    },
    {
        "second_pair": "koustubh",
        "percent": 0.9090909090909091,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "nelson",
        "percent": 2.727272727272727,
        "first_pair": "anup",
        "days_paired": 6
    },
    {
        "second_pair": "sabrina",
        "percent": 0.9090909090909091,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 4.090909090909091,
        "first_pair": "anup",
        "days_paired": 9
    },
    {
        "second_pair": "ashish",
        "percent": 1.8181818181818181,
        "first_pair": "ashish",
        "days_paired": 4
    },
    {
        "second_pair": "ben",
        "percent": 0.9090909090909091,
        "first_pair": "ashish",
        "days_paired": 2
    },
    {
        "second_pair": "nelson",
        "percent": 0.9090909090909091,
        "first_pair": "ashish",
        "days_paired": 2
    },
    {
        "second_pair": "sabrina",
        "percent": 0.45454545454545453,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "serdar",
        "percent": 0.45454545454545453,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "ben",
        "percent": 6.8181818181818175,
        "first_pair": "ben",
        "days_paired": 15
    },
    {
        "second_pair": "koustubh",
        "percent": 1.8181818181818181,
        "first_pair": "ben",
        "days_paired": 4
    },
    {
        "second_pair": "nelson",
        "percent": 0.45454545454545453,
        "first_pair": "ben",
        "days_paired": 1
    },
    {
        "second_pair": "sabrina",
        "percent": 0.45454545454545453,
        "first_pair": "ben",
        "days_paired": 1
    },
    {
        "second_pair": "serdar",
        "percent": 1.3636363636363635,
        "first_pair": "ben",
        "days_paired": 3
    },
    {
        "second_pair": "koustubh",
        "percent": 6.8181818181818175,
        "first_pair": "koustubh",
        "days_paired": 15
    },
    {
        "second_pair": "nelson",
        "percent": 2.272727272727273,
        "first_pair": "koustubh",
        "days_paired": 5
    },
    {
        "second_pair": "serdar",
        "percent": 0.45454545454545453,
        "first_pair": "koustubh",
        "days_paired": 1
    },
    {
        "second_pair": "nelson",
        "percent": 23.18181818181818,
        "first_pair": "nelson",
        "days_paired": 51
    },
    {
        "second_pair": "sabrina",
        "percent": 0.9090909090909091,
        "first_pair": "nelson",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 3.6363636363636362,
        "first_pair": "nelson",
        "days_paired": 8
    },
    {
        "second_pair": "sabrina",
        "percent": 4.545454545454546,
        "first_pair": "sabrina",
        "days_paired": 10
    },
    {
        "second_pair": "serdar",
        "percent": 17.272727272727273,
        "first_pair": "serdar",
        "days_paired": 38
    }
]))
  }

}

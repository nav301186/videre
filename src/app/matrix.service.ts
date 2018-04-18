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
        "percent": 4.251968503937007,
        "first_pair": "anup",
        "days_paired": 27
    },
    {
        "second_pair": "sabrina",
        "percent": 0.15748031496062992,
        "first_pair": "ben",
        "days_paired": 1
    },
    {
        "second_pair": "dennis",
        "percent": 0.31496062992125984,
        "first_pair": "abhinav",
        "days_paired": 2
    },
    {
        "second_pair": "prutha",
        "percent": 0.15748031496062992,
        "first_pair": "anup",
        "days_paired": 1
    },
    {
        "second_pair": "ben",
        "percent": 0.15748031496062992,
        "first_pair": "anup",
        "days_paired": 1
    },
    {
        "second_pair": "naveen",
        "percent": 0.15748031496062992,
        "first_pair": "dennis",
        "days_paired": 1
    },
    {
        "second_pair": "koustubh",
        "percent": 0.15748031496062992,
        "first_pair": "dennis",
        "days_paired": 1
    },
    {
        "second_pair": "sabrina",
        "percent": 0.6299212598425197,
        "first_pair": "sabrina",
        "days_paired": 4
    },
    {
        "second_pair": "koustubh",
        "percent": 0.15748031496062992,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "sebastian",
        "percent": 0.15748031496062992,
        "first_pair": "ganesh",
        "days_paired": 1
    },
    {
        "second_pair": "prutha",
        "percent": 0.15748031496062992,
        "first_pair": "alex",
        "days_paired": 1
    },
    {
        "second_pair": "serdar",
        "percent": 2.3622047244094486,
        "first_pair": "ganesh",
        "days_paired": 15
    },
    {
        "second_pair": "ben",
        "percent": 0.31496062992125984,
        "first_pair": "alex",
        "days_paired": 2
    },
    {
        "second_pair": "sebastian",
        "percent": 0.31496062992125984,
        "first_pair": "dennis",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 0.31496062992125984,
        "first_pair": "natesh",
        "days_paired": 2
    },
    {
        "second_pair": "manu",
        "percent": 0.6299212598425197,
        "first_pair": "koustubh",
        "days_paired": 4
    },
    {
        "second_pair": "naveen",
        "percent": 4.409448818897638,
        "first_pair": "naveen",
        "days_paired": 28
    },
    {
        "second_pair": "serdar",
        "percent": 1.889763779527559,
        "first_pair": "naveen",
        "days_paired": 12
    },
    {
        "second_pair": "koustubh",
        "percent": 0.7874015748031495,
        "first_pair": "ganesh",
        "days_paired": 5
    },
    {
        "second_pair": "ganesh",
        "percent": 0.31496062992125984,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "nelson",
        "percent": 0.7874015748031495,
        "first_pair": "koustubh",
        "days_paired": 5
    },
    {
        "second_pair": "manu",
        "percent": 0.9448818897637795,
        "first_pair": "david",
        "days_paired": 6
    },
    {
        "second_pair": "alex",
        "percent": 3.779527559055118,
        "first_pair": "alex",
        "days_paired": 24
    },
    {
        "second_pair": "serdar",
        "percent": 0.47244094488188976,
        "first_pair": "ben",
        "days_paired": 3
    },
    {
        "second_pair": "david",
        "percent": 0.7874015748031495,
        "first_pair": "abhinav",
        "days_paired": 5
    },
    {
        "second_pair": "david",
        "percent": 0.31496062992125984,
        "first_pair": "ben",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 0.15748031496062992,
        "first_pair": "koustubh",
        "days_paired": 1
    },
    {
        "second_pair": "naveen",
        "percent": 2.204724409448819,
        "first_pair": "anup",
        "days_paired": 14
    },
    {
        "second_pair": "dennis",
        "percent": 1.4173228346456692,
        "first_pair": "dennis",
        "days_paired": 9
    },
    {
        "second_pair": "nelson",
        "percent": 4.409448818897638,
        "first_pair": "nelson",
        "days_paired": 28
    },
    {
        "second_pair": "serdar",
        "percent": 0.31496062992125984,
        "first_pair": "sebastian",
        "days_paired": 2
    },
    {
        "second_pair": "sabrina",
        "percent": 0.47244094488188976,
        "first_pair": "anup",
        "days_paired": 3
    },
    {
        "second_pair": "naveen",
        "percent": 2.3622047244094486,
        "first_pair": "alex",
        "days_paired": 15
    },
    {
        "second_pair": "manu",
        "percent": 1.2598425196850394,
        "first_pair": "anup",
        "days_paired": 8
    },
    {
        "second_pair": "sebastian",
        "percent": 0.7874015748031495,
        "first_pair": "sabrina",
        "days_paired": 5
    },
    {
        "second_pair": "nelson",
        "percent": 0.7874015748031495,
        "first_pair": "ashish",
        "days_paired": 5
    },
    {
        "second_pair": "prutha",
        "percent": 1.2598425196850394,
        "first_pair": "manu",
        "days_paired": 8
    },
    {
        "second_pair": "manu",
        "percent": 1.889763779527559,
        "first_pair": "alex",
        "days_paired": 12
    },
    {
        "second_pair": "prutha",
        "percent": 2.204724409448819,
        "first_pair": "prutha",
        "days_paired": 14
    },
    {
        "second_pair": "david",
        "percent": 0.31496062992125984,
        "first_pair": "alex",
        "days_paired": 2
    },
    {
        "second_pair": "serdar",
        "percent": 2.677165354330709,
        "first_pair": "manu",
        "days_paired": 17
    },
    {
        "second_pair": "prutha",
        "percent": 0.31496062992125984,
        "first_pair": "ben",
        "days_paired": 2
    },
    {
        "second_pair": "naveen",
        "percent": 0.15748031496062992,
        "first_pair": "koustubh",
        "days_paired": 1
    },
    {
        "second_pair": "prutha",
        "percent": 0.15748031496062992,
        "first_pair": "koustubh",
        "days_paired": 1
    },
    {
        "second_pair": "nelson",
        "percent": 1.7322834645669292,
        "first_pair": "manu",
        "days_paired": 11
    },
    {
        "second_pair": "koustubh",
        "percent": 0.6299212598425197,
        "first_pair": "anup",
        "days_paired": 4
    },
    {
        "second_pair": "sebastian",
        "percent": 1.2598425196850394,
        "first_pair": "naveen",
        "days_paired": 8
    },
    {
        "second_pair": "manu",
        "percent": 8.188976377952756,
        "first_pair": "manu",
        "days_paired": 52
    },
    {
        "second_pair": "abhinav",
        "percent": 0.7874015748031495,
        "first_pair": "abhinav",
        "days_paired": 5
    },
    {
        "second_pair": "natesh",
        "percent": 0.31496062992125984,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "sebastian",
        "percent": 0.6299212598425197,
        "first_pair": "prutha",
        "days_paired": 4
    },
    {
        "second_pair": "sebastian",
        "percent": 1.4173228346456692,
        "first_pair": "david",
        "days_paired": 9
    },
    {
        "second_pair": "sabrina",
        "percent": 0.15748031496062992,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "ganesh",
        "percent": 2.204724409448819,
        "first_pair": "ganesh",
        "days_paired": 14
    },
    {
        "second_pair": "serdar",
        "percent": 1.2598425196850394,
        "first_pair": "anup",
        "days_paired": 8
    },
    {
        "second_pair": "david",
        "percent": 1.574803149606299,
        "first_pair": "david",
        "days_paired": 10
    },
    {
        "second_pair": "sebastian",
        "percent": 0.47244094488188976,
        "first_pair": "alex",
        "days_paired": 3
    },
    {
        "second_pair": "prutha",
        "percent": 0.15748031496062992,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "nelson",
        "percent": 0.15748031496062992,
        "first_pair": "ben",
        "days_paired": 1
    },
    {
        "second_pair": "serdar",
        "percent": 0.7874015748031495,
        "first_pair": "serdar",
        "days_paired": 5
    },
    {
        "second_pair": "manu",
        "percent": 1.574803149606299,
        "first_pair": "ganesh",
        "days_paired": 10
    },
    {
        "second_pair": "ben",
        "percent": 0.31496062992125984,
        "first_pair": "ashish",
        "days_paired": 2
    },
    {
        "second_pair": "natesh",
        "percent": 0.15748031496062992,
        "first_pair": "ben",
        "days_paired": 1
    },
    {
        "second_pair": "sebastian",
        "percent": 0.47244094488188976,
        "first_pair": "abhinav",
        "days_paired": 3
    },
    {
        "second_pair": "koustubh",
        "percent": 1.1023622047244095,
        "first_pair": "ben",
        "days_paired": 7
    },
    {
        "second_pair": "naveen",
        "percent": 0.15748031496062992,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "ashish",
        "percent": 0.6299212598425197,
        "first_pair": "ashish",
        "days_paired": 4
    },
    {
        "second_pair": "prutha",
        "percent": 0.31496062992125984,
        "first_pair": "david",
        "days_paired": 2
    },
    {
        "second_pair": "manu",
        "percent": 0.9448818897637795,
        "first_pair": "abhinav",
        "days_paired": 6
    },
    {
        "second_pair": "nelson",
        "percent": 1.7322834645669292,
        "first_pair": "alex",
        "days_paired": 11
    },
    {
        "second_pair": "sebastian",
        "percent": 0.47244094488188976,
        "first_pair": "anup",
        "days_paired": 3
    },
    {
        "second_pair": "dennis",
        "percent": 0.31496062992125984,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "sabrina",
        "percent": 0.7874015748031495,
        "first_pair": "alex",
        "days_paired": 5
    },
    {
        "second_pair": "nelson",
        "percent": 3.4645669291338583,
        "first_pair": "anup",
        "days_paired": 22
    },
    {
        "second_pair": "sabrina",
        "percent": 0.47244094488188976,
        "first_pair": "nelson",
        "days_paired": 3
    },
    {
        "second_pair": "nelson",
        "percent": 0.6299212598425197,
        "first_pair": "ganesh",
        "days_paired": 4
    },
    {
        "second_pair": "serdar",
        "percent": 1.4173228346456692,
        "first_pair": "nelson",
        "days_paired": 9
    },
    {
        "second_pair": "dennis",
        "percent": 0.15748031496062992,
        "first_pair": "david",
        "days_paired": 1
    },
    {
        "second_pair": "serdar",
        "percent": 0.15748031496062992,
        "first_pair": "ashish",
        "days_paired": 1
    },
    {
        "second_pair": "naveen",
        "percent": 0.47244094488188976,
        "first_pair": "manu",
        "days_paired": 3
    },
    {
        "second_pair": "sabrina",
        "percent": 0.31496062992125984,
        "first_pair": "david",
        "days_paired": 2
    },
    {
        "second_pair": "ben",
        "percent": 1.7322834645669292,
        "first_pair": "ben",
        "days_paired": 11
    },
    {
        "second_pair": "prutha",
        "percent": 1.574803149606299,
        "first_pair": "ganesh",
        "days_paired": 10
    },
    {
        "second_pair": "ganesh",
        "percent": 0.6299212598425197,
        "first_pair": "ben",
        "days_paired": 4
    },
    {
        "second_pair": "sebastian",
        "percent": 0.7874015748031495,
        "first_pair": "nelson",
        "days_paired": 5
    },
    {
        "second_pair": "anup",
        "percent": 0.7874015748031495,
        "first_pair": "alex",
        "days_paired": 5
    },
    {
        "second_pair": "ganesh",
        "percent": 0.7874015748031495,
        "first_pair": "david",
        "days_paired": 5
    },
    {
        "second_pair": "koustubh",
        "percent": 1.2598425196850394,
        "first_pair": "koustubh",
        "days_paired": 8
    },
    {
        "second_pair": "nelson",
        "percent": 2.5196850393700787,
        "first_pair": "naveen",
        "days_paired": 16
    },
    {
        "second_pair": "david",
        "percent": 0.31496062992125984,
        "first_pair": "anup",
        "days_paired": 2
    },
    {
        "second_pair": "sebastian",
        "percent": 3.3070866141732282,
        "first_pair": "sebastian",
        "days_paired": 21
    },
    {
        "second_pair": "prutha",
        "percent": 0.31496062992125984,
        "first_pair": "abhinav",
        "days_paired": 2
    },
    {
        "second_pair": "sabrina",
        "percent": 0.15748031496062992,
        "first_pair": "ganesh",
        "days_paired": 1
    }
]))
  }

}

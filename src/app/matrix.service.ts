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
    return JSON.parse(JSON.stringify([{"second_pair":"anup","percent":5.9259259259259265,"first_pair":"anup","days_paired":8},{"second_pair":"sabrina","percent":0.7407407407407408,"first_pair":"ben","days_paired":1},{"second_pair":"ben","percent":0.7407407407407408,"first_pair":"anup","days_paired":1},{"second_pair":"sabrina","percent":2.9629629629629632,"first_pair":"sabrina","days_paired":4},{"second_pair":"serdar","percent":4.444444444444445,"first_pair":"ganesh","days_paired":6},{"second_pair":"manu","percent":0.7407407407407408,"first_pair":"koustubh","days_paired":1},{"second_pair":"koustubh","percent":1.4814814814814816,"first_pair":"ganesh","days_paired":2},{"second_pair":"nelson","percent":0.7407407407407408,"first_pair":"koustubh","days_paired":1},{"second_pair":"manu","percent":2.9629629629629632,"first_pair":"david","days_paired":4},{"second_pair":"naveen","percent":0.7407407407407408,"first_pair":"daniel","days_paired":1},{"second_pair":"alex","percent":0.7407407407407408,"first_pair":"alex","days_paired":1},{"second_pair":"serdar","percent":1.4814814814814816,"first_pair":"ben","days_paired":2},{"second_pair":"david","percent":0.7407407407407408,"first_pair":"abhinav","days_paired":1},{"second_pair":"nelson","percent":0.7407407407407408,"first_pair":"daniel","days_paired":1},{"second_pair":"david","percent":1.4814814814814816,"first_pair":"ben","days_paired":2},{"second_pair":"naveen","percent":0.7407407407407408,"first_pair":"anup","days_paired":1},{"second_pair":"nikunj","percent":2.2222222222222223,"first_pair":"manu","days_paired":3},{"second_pair":"dennis","percent":1.4814814814814816,"first_pair":"dennis","days_paired":2},{"second_pair":"nelson","percent":2.9629629629629632,"first_pair":"nelson","days_paired":4},{"second_pair":"sabrina","percent":1.4814814814814816,"first_pair":"anup","days_paired":2},{"second_pair":"naveen","percent":0.7407407407407408,"first_pair":"alex","days_paired":1},{"second_pair":"manu","percent":0.7407407407407408,"first_pair":"anup","days_paired":1},{"second_pair":"prutha","percent":0.7407407407407408,"first_pair":"nikunj","days_paired":1},{"second_pair":"sebastian","percent":0.7407407407407408,"first_pair":"sabrina","days_paired":1},{"second_pair":"nelson","percent":0.7407407407407408,"first_pair":"ashish","days_paired":1},{"second_pair":"prutha","percent":2.9629629629629632,"first_pair":"manu","days_paired":4},{"second_pair":"prutha","percent":2.2222222222222223,"first_pair":"prutha","days_paired":3},{"second_pair":"serdar","percent":2.2222222222222223,"first_pair":"manu","days_paired":3},{"second_pair":"prutha","percent":0.7407407407407408,"first_pair":"ben","days_paired":1},{"second_pair":"nelson","percent":2.2222222222222223,"first_pair":"manu","days_paired":3},{"second_pair":"sebastian","percent":1.4814814814814816,"first_pair":"naveen","days_paired":2},{"second_pair":"manu","percent":9.62962962962963,"first_pair":"manu","days_paired":13},{"second_pair":"daniel","percent":0.7407407407407408,"first_pair":"anup","days_paired":1},{"second_pair":"sebastian","percent":0.7407407407407408,"first_pair":"prutha","days_paired":1},{"second_pair":"ganesh","percent":5.9259259259259265,"first_pair":"ganesh","days_paired":8},{"second_pair":"serdar","percent":1.4814814814814816,"first_pair":"anup","days_paired":2},{"second_pair":"david","percent":2.2222222222222223,"first_pair":"david","days_paired":3},{"second_pair":"sebastian","percent":0.7407407407407408,"first_pair":"alex","days_paired":1},{"second_pair":"serdar","percent":0.7407407407407408,"first_pair":"serdar","days_paired":1},{"second_pair":"manu","percent":2.9629629629629632,"first_pair":"ganesh","days_paired":4},{"second_pair":"dennis","percent":1.4814814814814816,"first_pair":"daniel","days_paired":2},{"second_pair":"manu","percent":0.7407407407407408,"first_pair":"daniel","days_paired":1},{"second_pair":"koustubh","percent":1.4814814814814816,"first_pair":"ben","days_paired":2},{"second_pair":"nikunj","percent":0.7407407407407408,"first_pair":"ben","days_paired":1},{"second_pair":"prutha","percent":0.7407407407407408,"first_pair":"david","days_paired":1},{"second_pair":"manu","percent":1.4814814814814816,"first_pair":"abhinav","days_paired":2},{"second_pair":"nelson","percent":2.2222222222222223,"first_pair":"alex","days_paired":3},{"second_pair":"dennis","percent":1.4814814814814816,"first_pair":"anup","days_paired":2},{"second_pair":"nelson","percent":2.2222222222222223,"first_pair":"anup","days_paired":3},{"second_pair":"dennis","percent":0.7407407407407408,"first_pair":"david","days_paired":1},{"second_pair":"nikunj","percent":2.9629629629629632,"first_pair":"nikunj","days_paired":4},{"second_pair":"ben","percent":0.7407407407407408,"first_pair":"ben","days_paired":1},{"second_pair":"prutha","percent":1.4814814814814816,"first_pair":"ganesh","days_paired":2},{"second_pair":"anup","percent":0.7407407407407408,"first_pair":"alex","days_paired":1},{"second_pair":"ganesh","percent":2.2222222222222223,"first_pair":"david","days_paired":3},{"second_pair":"koustubh","percent":1.4814814814814816,"first_pair":"koustubh","days_paired":2},{"second_pair":"sebastian","percent":0.7407407407407408,"first_pair":"sebastian","days_paired":1}]))
  }

}

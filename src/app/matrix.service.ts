import { Injectable } from '@angular/core';
import { XparGateway } from './gateway/xpar.gateway';

@Injectable()
export class MatrixService {

  constructor( private _gateway: XparGateway ) { }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  getLocalData(value: any) {
    return (value !== null && value !== undefined && value !== "");
  }
}

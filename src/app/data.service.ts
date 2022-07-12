import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  setData(data: string) {
    console.log("Data : " + data);
  }
}

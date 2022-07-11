import { Injectable } from "@angular/core";

@Injectable()
export class ServerService {
  getEmployees() {
    return [
      { id: 1, name: "Biswa", age: 25 },
      { id: 2, name: "Yash", age: 21 },
      { id: 3, name: "Tushar", age: 22 },
      { id: 4, name: "Sachin", age: 23 },
      { id: 5, name: "Vatsal", age: 24 }
    ];
  }
}

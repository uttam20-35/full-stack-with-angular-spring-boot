import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  
  constructor(
    public message:string,
    public num:number,
    // public helloBeanTwo: object
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    // console.log('WelcomeDataService---->executeHelloWorldBeanService')
    return this.http.get<HelloWorldBean>('http://localhost:1010/helloBean');
    // console.log('Execute Hello World bean service')
  }

  executeHelloWorldBeanServiceWithPathVariable(name:string){
    this.http.get(`http://localhost:1010/helloBean/path-variable/${name}`)
  }
}

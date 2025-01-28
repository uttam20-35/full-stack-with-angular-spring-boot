import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: false,
  
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  message ='Some welcome works in variable'
  welcomeMsgFromService: object | any 
  name=''

  welcomeNumFromService: number | undefined;
  // welcomeObjFromService: any;

  //Activated Route
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService
  ){}

  ngOnInit(){
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response =>  this.handleSuccessfulResponse(response),
      error =>  this.handleErrorResponse(error)
    );
    // console.log('last line of getmessage')
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    // console.log('response is : ',response)
    this.welcomeMsgFromService = response.message;
    this.welcomeNumFromService =response.num;
    // this.welcomeObjFromService =response.helloBeanTwo;
  }

  handleErrorResponse(error: any){
    // console.log('THIS IS ERROR =>',error)
    // console.log('THIS IS ERROR2',error.error)
    // console.log('THIS IS ERROR MSG',error.message)
    this.welcomeMsgFromService=error.error.message
  }
  
}

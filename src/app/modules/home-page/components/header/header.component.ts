import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/modules/sign-in/components/sign-in/sign-in.component';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
  test:number=5;
  constructor( private sign_inService1:sign_inService) { }
  showBut:boolean=this.sign_inService1.Signedin;
  FirstName :string =this.sign_inService1.firstName ;

  ngOnInit(): void {
    // while(true){
    //   this.showBut=this.sign_inService1.Signedin;

    // }
  }
   Alertmes():number{
    console.log("OOpsie");
return 76
  }

  checkSignedin(){
    // if(this.showBut){
    //   (document.getElementById("header-but")as HTMLInputElement).classList.add("SignedIn");
    // }

  }



}

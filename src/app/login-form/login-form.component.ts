import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
signupUsers : any[] =[];
signupObj : any = {
  userName:'',
  email:'',
  password:''

};
loginObj : any = {
  userName:'',
  password:''

};
  constructor(private router :Router){

}
  ngOnInit(): void {
const localData = localStorage.getItem('signUpUsers');
if(localData != null){
  this.signupUsers = JSON.parse(localData);
}
}
onSignUp(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
this.signupObj = {
  userName:'',
  email:'',
  password:''
}
}
onLogin(){
const isUserExist = this.signupUsers.find(res => res.userName == this.loginObj.userName && res.password == this.loginObj.password)
if(isUserExist != undefined){
  alert("user logged in successfully");
  this.router.navigate(['/contact-list']);
}
else {
  alert('Wrong Credentials, please try again')
}
}
}

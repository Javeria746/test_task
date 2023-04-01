import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
declare var window:any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  btn:any='Save';
  formModal: any;
  contactList: any[] = [];
  contact : any = {
    contactID:0,
    name:'',
    email:'',
    mobile:'',
    description:''

  }
constructor(private toast:ToastrService){

}
ngOnInit(): void {
  this.btn='Save';
this.formModal = new window.bootstrap.Modal(document.getElementById("exampleModal"))
const localdata = localStorage.getItem('contactList');
if(localdata != null){
  this.contactList = JSON.parse(localdata);
}
}
openmodal(){

this.formModal.show();
this.contact = {
  contactID:0,
  name:'',
  email:'',
  mobile:'',
  description:''

}
}
closeModal(){
this.formModal.hide();
}
saveData(data:any){
  debugger;

  if(this.btn=='Save'){
    this.contact.contactID = this.contactList.length+1;
    this.contactList.push(this.contact);
    this.closeModal();
    this.toast.success('Added Successfully!');
    localStorage.setItem('contactList', JSON.stringify(this.contactList));
    this.contact = {
      contactID:0,
      name:'',
      email:'',
      mobile:'',
      description:''
  
    }
  }
  else if(this.btn=='update'){
    const record = this.contactList.find(res=> res.contactID == this.contact.contactID);
   record.name = this.contact.name;
   record.email =this.contact.email;
   record.mobile =this.contact.mobile;
   record.description = this.contact.description;
  
   this.closeModal();
   this.toast.success('updated  Successfully!');
   localStorage.setItem('contactList', JSON.stringify(this.contactList));

  }
 
}
onEdit(contact:any){
 
  this.btn='update';
  this.openmodal();

  this.contact = contact;


}
onDelete(id:any){
  for (let i =0; i < this.contactList.length; i++){
    if(this.contactList[i].contactID == id){
      
      this.contactList.splice(i,1)
    }
  }
  localStorage.setItem('contactList', JSON.stringify(this.contactList));
  this.toast.error("record deleted successfully!")
  
}
}

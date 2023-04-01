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
  studentArr: any[] = [];
  student : any = {
    studentID:0,
    name:'',
    email:'',
    mobile:'',
    description:''

  }
constructor(private toast:ToastrService){

}
ngOnInit(): void {
this.formModal = new window.bootstrap.Modal(document.getElementById("exampleModal"))
const localdata = localStorage.getItem('studentList');
if(localdata != null){
  this.studentArr = JSON.parse(localdata);
}
}
openmodal(){
this.formModal.show();
this.student = {
  studentID:0,
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
    this.student.studentID = this.studentArr.length+1;
    this.studentArr.push(this.student);
    this.closeModal();
    this.toast.success('Added Successfully!');
    localStorage.setItem('studentList', JSON.stringify(this.studentArr));
    this.student = {
      studentID:0,
      name:'',
      email:'',
      mobile:'',
      description:''
  
    }
  }
  else if(this.btn=='update'){
    const record = this.studentArr.find(res=> res.studentID == this.student.studentID);
   record.name = this.student.name;
   record.email =this.student.email;
   record.mobile =this.student.mobile;
   record.description = this.student.description;
  
   this.closeModal();
   this.toast.success('updated  Successfully!');
   localStorage.setItem('studentList', JSON.stringify(this.studentArr));

  }
 
}
onEdit(student:any){
 
  this.btn= 'update'
  this.openmodal();

  this.student = student;


}
onDelete(id:any){
  for (let i =0; i < this.studentArr.length; i++){
    if(this.studentArr[i].studentID == id){
      
      this.studentArr.splice(i,1)
    }
  }
  localStorage.setItem('studentList', JSON.stringify(this.studentArr));
  this.toast.error("record deleted successfully!")
  
}
}

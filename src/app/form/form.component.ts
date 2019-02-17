import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formBuild:FormBuilder; //ภายนอกใช้ชื่อเต็ม ภายในใช้ชื่อย่อ
  formGroup: FormGroup;
  constructor( // ของใน constructor ไม่สามารถนำออกมาข้างนอกได้
    private formBuild: FormBuilder
  ) { 
    // this.formBuild = fb; // สร้างชื่อขึ้นมาเพื่อเอาไว้เก็บค่า
  }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: this.formBuild.control('Nutnaree'),
      lastName: ['Kitprasertpol'],
      email:['nutnaree.ki@ku.th'],
      age:['22']
    })
  }

  onSubmit(form: FormGroup){
    const {firstName, lastName, email, age} = form.value;
    const user = new User(firstName, lastName, email, age);
    console.log(user);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formBuild:FormBuilder; //ภายนอกใช้ชื่อเต็ม ภายในใช้ชื่อย่อ
  formGroup: FormGroup;
  @Output() change = new EventEmitter(); //ต้องใช้ EventEmitter เพื่อเรียกใช้

  constructor( // ของใน constructor ไม่สามารถนำออกมาข้างนอกได้
    private formBuild: FormBuilder
  ) {
    // this.formBuild = fb; // สร้างชื่อขึ้นมาเพื่อเอาไว้เก็บค่า
  }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      age: [,[Validators.min(0),Validators.max(99)]]
    })
  }

  emailValidator(control: AbstractControl) {
    const value: string = control.value;
    if (value && value.includes('@')) {
      return null;
    }
    return {
      email: true
    }
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid, form.invalid); //valid,invalid จะไม่มีทางเป็น true ทั้งคู่หรือ false ทั้งคู่
    console.log((<FormControl>form.get('firstName')).errors);

    if (form.valid) {
      const { firstName, lastName, email, age } = form.value;
      const user = new User(firstName, lastName, email, age);
      this.change.emit(user); //ให้ค่าค่านี้ส่งไปให้คนที่ต้องการ ในที่นี้คือ component แม่ คือ app.component
      console.log(user);
    } else {
      [
        'firstName',
        'lastName',
        'email',
        'age'].forEach((key: string) => {
          console.log(form.get(key).errors);
          form.get(key).markAsTouched();
        })
    }
  }
}

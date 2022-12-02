import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';

declare var M: any;

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  constructor(public studentService: StudentService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.studentService.selectedStudent = {
      _id: '',
      name: '',
      course: '',
      batch: '',
      semester: '',
      resStatus: '',
    };
  }

  onSubmit(form: NgForm) {
    this.studentService.add(form.value).subscribe((res) => {
      if (form.value.name === res.name) {
        M.toast({
          html: 'Student Added',
          classes: 'rounded',
          displayLength: 1000,
        });
        this.resetForm();
      }
    });
  }
}

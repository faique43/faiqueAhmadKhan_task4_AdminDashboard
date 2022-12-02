import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  student!: Student;
  constructor(
    public studentService: StudentService,
    private router: ActivatedRoute,
    private Router: Router
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    this.studentService
      .getStudent(this.router.snapshot.params['id'])
      .subscribe((res) => {
        this.studentService.selectedStudent = {
          _id: res._id,
          name: res.name,
          course: res.course,
          batch: res.batch,
          semester: res.semester,
          resStatus: res.resStatus,
        };
      });
  }

  onSubmit(form?: NgForm) {
    this.studentService.editStudent(form?.value,this.router.snapshot.params['id']).subscribe((res) => {
      this.Router.navigateByUrl('/homepage');
    })
  }
}

import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

declare var M: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public students!: Student[];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.studentService.delete(_id).subscribe((res) => {
        this.getStudents();
        M.toast({ html: 'Record Deleted Successfully', classes: 'rounded' });
      });
    }
  }
}

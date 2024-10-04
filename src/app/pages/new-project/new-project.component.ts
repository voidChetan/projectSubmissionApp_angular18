import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css'
})
export class NewProjectComponent {

  projectForm: FormGroup = new FormGroup({});
  departments: Department[] = [
    {deptId:1, deptName:"Computer Science"},
    {deptId:2, deptName:"Electrical Engineering"},
    {deptId:3, deptName:"Mechanical Engineering"}
  ];
  filteredCourse: Course[] = [];
  departmentCourse: Course[] = [ 
    {courseId: 1,deptId:1, courseName:"Data Structures"},
    {courseId: 2,deptId:1, courseName:'Algorithms'},
    {courseId: 3,deptId:1, courseName:'Web Development'},
    {courseId: 4,deptId:1, courseName:'Machine Learning'}, 

    {courseId: 5,deptId:2, courseName:'Circuit Analysis'},
    {courseId: 6,deptId:2, courseName:'Electromagnetics'},
    {courseId: 7,deptId:2, courseName:'Digital Systems'},
    {courseId: 8,deptId:2, courseName:'Control Systems'}, 
    {courseId: 9,deptId:3, courseName:'Thermodynamics'},
    {courseId: 10,deptId:3, courseName:'Fluid Mechanics'},
    {courseId: 11,deptId:3, courseName:'Solid Mechanics'},
    {courseId: 12,deptId:3, courseName:'Dynamics'}
  ]
  constructor(){
    this.createForm();
  }

  createForm() {
    this.projectForm = new FormGroup({
      studentName: new FormControl('',[Validators.required]),
      contactNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      emailId: new FormControl('',[Validators.required,Validators.email]),
      projectTitle: new FormControl('',[Validators.required]),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      department: new FormControl(''),
      course: new FormControl(''),
      technologies: new FormControl('',[Validators.required]),
      isSynopsisSubmitted: new FormControl(''),
      dateOfSubmission: new FormControl(''),
      gitHubUrl: new FormControl(''),
      projectDescription: new FormControl('',[Validators.required]),
      isGroupProject: new FormControl(''),
      groupMembers: new FormControl('')
    })
  }
 

}

export interface Department {
  deptId: number,
  deptName: string
}
export interface Course {
  deptId: number,
  courseId: number,
  courseName: string
}

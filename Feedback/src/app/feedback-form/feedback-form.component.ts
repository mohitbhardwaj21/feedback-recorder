import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',

  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private FS: FeedbackService) {}
  // tslint:disable-next-line: member-ordering
  courses = [
    { name: 'HTML CSS Bootstrap' },
    { name: 'JavaScript' },
    { name: 'MongoDB' },
    { name: 'Node & Express' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Project' },
  ];
  successMessage = null;
  errorMessage = null;
  feedbackForm = this.fb.group({
    empName: ['', [Validators.required]],
    courseOpted: ['', [Validators.required]],
    rating: ['', [Validators.required]],
    comments: [''],
  });
  ngOnInit() {}
  submitForm() {
    const newObj = {
      courseOpted: this.feedbackForm.value.courseOpted,
      rating: this.feedbackForm.value.rating,
      comments: this.feedbackForm.value.comments,
    };
    this.FS.submitFeedback(this.feedbackForm.value.empName, newObj).subscribe(
      (res) => {
        if (res) {
          console.log(res);
          this.errorMessage = null;
          this.successMessage = 'Feedback is successfully submitted';
        }
      },
      (err) => {
        this.successMessage = null;
        if (err) {
          console.log(err.error.message);
          this.errorMessage = 'Failed to update';
        }
      }
    );
  }
}

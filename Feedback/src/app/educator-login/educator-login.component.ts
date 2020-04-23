import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-educator-login",
  templateUrl: "./educator-login.component.html",
  styleUrls: ["./educator-login.component.css"],
})
export class EducatorLoginComponent implements OnInit {
  [x: string]: any;
  employeeList = [
    { userId: "chebolu.saiguptha", passKey: "SaiDev1811" },
    { userId: "mohit.bhardwaj01", passKey: "Mnmb@1119" },
    { userId: "angad.bindra", passKey: "angad@666" },
  ];
  errorMessage = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    userId: ["", [Validators.required]],
    passKey: ["", [Validators.required]],
  });

  ngOnInit() {}
  login() {
    this.employeeList.filter((employeeData) => {
      if (employeeData.userId == this.loginForm.value.userId) {
        if (employeeData.passKey == this.loginForm.value.passKey) {
          const user = this.loginForm.value.userId.split(".")[0];
          const userName = user.toUpperCase();
          console.log(userName);
          this.errorMessage = null;
          this.router.navigate(["getFeedBack", userName]);
        } else {
          this.errorMessage = "Invalid Pass Key";
        }
      } else {
        this.errorMessage = "Invalid User Id";
      }
    });
  }
}

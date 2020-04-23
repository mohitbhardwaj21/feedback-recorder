import { Component, OnInit } from "@angular/core";
import { GetFeedbackService } from "./get-feedback.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-get-feedback",
  templateUrl: "./get-feedback.component.html",
  styleUrls: ["./get-feedback.component.css"],
})
export class GetFeedbackComponent implements OnInit {
  constructor(private GFS: GetFeedbackService, private route: ActivatedRoute) {}
  name = "";

  successMessage = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.name = params["userName"];
    });
    this.GFS.display(name).subscribe(
      (res) => {
        let user = this.name;
        if (user == "CHEBOLU") {
          user = "Chebolu Saiguptha";
        } else if (user == "MOHIT") {
          user = "Mohit Bhardwaj";
        }
        const userKey = Object.keys(res[user]);
        userKey.map((key) => {
          this.successMessage.push(res[user][key]);
        });
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }
}

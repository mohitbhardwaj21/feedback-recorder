import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetFeedbackComponent } from "./get-feedback/get-feedback.component";
import { EducatorLoginComponent } from "./educator-login/educator-login.component";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";

const routes: Routes = [
  { path: "getFeedBack/:userName", component: GetFeedbackComponent },
  { path: "login", component: EducatorLoginComponent },
  { path: "home", component: FeedbackFormComponent },
  { path: "*", component: FeedbackFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

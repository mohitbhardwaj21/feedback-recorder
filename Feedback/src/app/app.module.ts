import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { BarRatingModule } from "ngx-bar-rating";
import { HttpClientModule } from "@angular/common/http";
import { GetFeedbackComponent } from './get-feedback/get-feedback.component';
import { EducatorLoginComponent } from './educator-login/educator-login.component';
import { GetFeedbackPipe } from './get-feedback/get-feedback.pipe';

@NgModule({
  declarations: [AppComponent, FeedbackFormComponent, GetFeedbackComponent, EducatorLoginComponent, GetFeedbackPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BarRatingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

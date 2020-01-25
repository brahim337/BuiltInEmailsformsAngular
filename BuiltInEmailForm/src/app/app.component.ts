import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BuiltInEmailForm";
  myRegExpression = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  get primEmail() {
    return this.userEmails.get("primaryEmail");
  }
  get secondEmail() {
    return this.userEmails.get("secondaryEmail");
  }
  userEmails = new FormGroup({
    primaryEmail: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    secondaryEmail: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ])
  });
}

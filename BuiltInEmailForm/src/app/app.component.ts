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
  usedName = "d";
  telefon: number;
  password: string;
  formSubmitted = false;
  onSubmit() {
    if (this.userEmails.valid) {
      console.log("submitted");
      this.formSubmitted = true;
      this.userEmails.reset();
    } else {
      alert("the form is not valid");
      console.log("not submitted");
    }
  }
  get primEmail() {
    return this.userEmails.get("primaryEmail");
  }
  get secondEmail() {
    return this.userEmails.get("secondaryEmail");
  }

  get userName() {
    return this.userEmails.get("name");
  }
  get userTelefonNumber() {
    return this.userEmails.get("telefon");
  }
  get userPassword() {
    return this.userEmails.get("password");
  }

  userEmails = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-z]*")
    ]),
    primaryEmail: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    secondaryEmail: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    telefon: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("[0-9]*")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });
}

import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: "select-gender",
  templateUrl: "views/modals/select-gender/select-gender.html",
  styleUrls: ["views/modals/select-gender/select-gender.css"]
})

export class SelectGenderComponent {
    gender: number;
    genders: Array<string> = ["Female", "Male", "Other"]; 
    
    constructor(private params: ModalDialogParams) { 
        this.gender = params.context; 
    }

    onDoneTap(): any {
        this.params.closeCallback(this.genders[this.gender]); 
    }
}
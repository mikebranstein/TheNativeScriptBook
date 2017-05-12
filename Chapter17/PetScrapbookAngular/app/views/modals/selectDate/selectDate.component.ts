import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "selectDate",
    templateUrl: "views/modals/selectDate/selectDate.html"
})
export class SelectDateComponent {
    date: any;

    constructor(private params: ModalDialogParams) {
        this.date = params.context;
    }

    onDoneTap(): any {
        this.params.closeCallback(this.date);
    }
}

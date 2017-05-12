import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "select-date",
    templateUrl: "views/modals/select-date/select-date.html",
    styleUrls: ["views/modals/select-date/select-date.css"]
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

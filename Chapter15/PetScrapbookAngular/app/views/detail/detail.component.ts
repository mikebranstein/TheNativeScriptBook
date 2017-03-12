import { Component, ViewContainerRef } from "@angular/core";
import { Image } from "ui/image";
import * as camera from "camera";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { SelectDateComponent } from "../modals/selectDate/selectDate.component";
import { SelectGenderComponent } from "../modals/selectGender/selectGender.component";

@Component({
    selector: "detail",
    templateUrl: "views/detail/detail.html",
    styleUrls: ["views/detail/detail.css"]  
})
export class DetailComponent {
    title: string;
    age: number;
    birthDate: any;
    gender: string;
    lat: number;
    long: number;

    constructor( private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
        this.title = "Riven";
        this.age = 4;
        this.lat = 31.434534;
        this.long = -24.53454;
    }

    onDoneTap(): void {
        console.log('done tapped');
    }

    onBirthDateTap(): void {
        let options: ModalDialogOptions = {
            context: this.birthDate,
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(SelectDateComponent, options)
            .then((dialogResult: any) => {
                this.birthDate = dialogResult;
            });
    }

    onGenderTap(): void {
        let options: ModalDialogOptions = {
            context: this.gender,
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(SelectGenderComponent, options)
            .then((dialogResult: string) => {
                this.gender = dialogResult;
            });
    }

    onAddImageTap(): void {
        console.log('image tapped');
    }
}

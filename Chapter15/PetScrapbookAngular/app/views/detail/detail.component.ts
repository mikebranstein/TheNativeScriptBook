import { Component, ViewContainerRef } from "@angular/core";
import { ImageSource } from "image-source";
import * as camera from "camera";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { SelectDateComponent } from "../modals/selectDate/selectDate.component";
import { SelectGenderComponent } from "../modals/selectGender/selectGender.component";
import * as geolocation from "nativescript-geolocation";

@Component({
    selector: "detail",
    templateUrl: "views/detail/detail.html",
    styleUrls: ["views/detail/detail.css"]
})
export class DetailComponent {
    title: string;
    age: string;
    birthDate: any;
    gender: string;
    lat: number;
    long: number;
    image: ImageSource;

    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
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
                
                let now = Date.now();
                let diff = Math.abs(now - this.birthDate) / 1000 / 31536000;

                this.age = diff.toFixed(1);
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
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }

        camera.takePicture({ width: 100, height: 100, keepAspectRatio: true })
            .then((picture) => {
                this.image = picture;

                geolocation.getCurrentLocation(null)
                    .then((location) => {
                        this.lat = location.latitude;
                        this.long = location.longitude;
                    });
            });
    }
}
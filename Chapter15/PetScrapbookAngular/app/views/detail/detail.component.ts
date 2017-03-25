import { Component, ViewContainerRef } from "@angular/core";
import { ImageSource } from "image-source";
import * as camera from "camera";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { SelectDateComponent } from "../modals/selectDate/selectDate.component";
import { SelectGenderComponent } from "../modals/selectGender/selectGender.component";
import * as geolocation from "nativescript-geolocation";
import { Page } from "../../models/page";
import { Router, ActivatedRoute } from "@angular/router";
import { FileSystemService } from "../../services/fileSystemService";

@Component({
    selector: "detail",
    providers: [FileSystemService],
    templateUrl: "views/detail/detail.html",
    styleUrls: ["views/detail/detail.css"]
})
export class DetailComponent {
    id: number;
    title: string;
    age: string;
    birthDate: any;
    gender: string;
    lat: number;
    long: number;
    image: ImageSource;
    imageBase64: string;

    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef,
        private router: Router, private route: ActivatedRoute, private fileSystemService: FileSystemService) {
        route.queryParams.subscribe((params) => {
            let id = params["id"];
            let page = fileSystemService.getPage(id);

            if (page !== null) {
                this.id = page.Id;
                this.title = page.Title;
                this.gender = page.Gender;
                this.age = page.Age;
                this.birthDate = page.BirthDate;
                this.lat = page.Lat;
                this.long = page.Long;
                this.image = page.Image;
                this.imageBase64 = page.ImageBase64;
            } else {
                this.id = id;
            }
        });
    }

    onDoneTap(): void {
        let page = new Page();

        page.Id = this.id;
        page.Title = this.title;
        page.Gender = this.gender;
        page.Age = this.age;
        page.BirthDate = this.birthDate;
        page.Lat = this.lat;
        page.Long = this.long;
        page.ImageBase64 = this.imageBase64;

        this.fileSystemService.savePage(page);
        this.router.navigate(["list"]);
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
                this.imageBase64 = picture.toBase64String("png");

                geolocation.getCurrentLocation(null)
                    .then((location) => {
                        this.lat = location.latitude;
                        this.long = location.longitude;
                    });
            });
    }
}
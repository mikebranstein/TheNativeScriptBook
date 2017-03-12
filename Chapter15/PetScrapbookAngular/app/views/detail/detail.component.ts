import { Component } from "@angular/core";
import { Image } from "ui/image";
import * as camera from "camera";

@Component({
    selector: "detail",
    templateUrl: "views/detail/detail.html",
    styleUrls: ["views/detail/detail.css"]  
})
export class DetailComponent {
    title: string;
    age: number;
    birthDate: string;
    gender: string;
    lat: number;
    long: number;

    constructor() {
        this.title = "Riven";
        this.age = 4;
        this.birthDate = "12/25/2013";
        this.gender = "Female";
        this.lat = 31.434534;
        this.long = -24.53454;
    }

    onDoneTap(): void {
        console.log('done tapped');
    }

    onBirthDateTap(): void {
        console.log('date tapped');
    }

    onGenderTap(): void {
        console.log('gender tapped');
    }

    onAddImageTap(): void {
        console.log('image tapped');
    }
}

import { Injectable } from "@angular/core";
import { Page } from "../models/page";
import * as fileSystem from "file-system";

@Injectable()
export class FileSystemService {
    getPages(): Array<Page> {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");

        if (file.readTextSync().length === 0)
            return null;
        
        return <Array<Page>>JSON.parse(file.readTextSync());
    }

    savePage(pages: Array<Page>): void {
        let file = fileSystem.knownFolders.documents().getFile("scoreboard.json");
        let json = JSON.stringify(pages);

        file.writeTextSync(json);
        //     var pages = this.getPages();

        //     let index = pages.findIndex(function (element) {
        //         return element.id === scrapbookPage.id;
        //     });

        // if (index !== -1) {
        //     pages[index] = {
        //         id: scrapbookPage.id,
        //         title: scrapbookPage.title,
        //         gender: scrapbookPage.gender,
        //         year: scrapbookPage.year,
        //         month: scrapbookPage.month,
        //         day: scrapbookPage.day,
        //         imageBase64: scrapbookPage.image != null ? scrapbookPage.image.toBase64String("png") : null,
        //         lat: scrapbookPage.lat,
        //         long: scrapbookPage.long
        //     };
        // }
        // else {
        //     pages.push({
        //         id: scrapbookPage.id,
        //         title: scrapbookPage.title,
        //         gender: scrapbookPage.gender,
        //         year: scrapbookPage.year,
        //         month: scrapbookPage.month,
        //         day: scrapbookPage.day,
        //         imageBase64: scrapbookPage.image != null ? scrapbookPage.image.toBase64String("png") : null,
        //         lat: scrapbookPage.lat,
        //         long: scrapbookPage.long
        //     });
        // }

        // var json = JSON.stringify(pages);
        // this.file.writeText(json); 
    }
}
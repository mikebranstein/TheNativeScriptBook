import { Injectable } from "@angular/core";
import { Page } from "../models/page";
import * as fileSystem from "file-system";

@Injectable()
export class FileSystemService {
    getPages(): Array<Page> {
        let file = fileSystem.knownFolders.documents().getFile("scrapbook.json");

        if (file.readTextSync().length === 0)
            return null;
        
        return <Array<Page>>JSON.parse(file.readTextSync());
    }

    savePage(scrapbookPage: Page): void {
        let file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
        let pages = this.getPages();

        // let index = pages.findIndex(function (element) {
        //     return element.Id === scrapbookPage.Id;
        // });
        // let page = new Page();
        // page.Id = scrapbookPage.Id;
        // page.Title = scrapbookPage.Title;
        
        // if (index !== -1) {
        //     pages[index] = scrapbookPage;
        //     // pages[index] = {
        //     //     Id: scrapbookPage.Id,
        //     //     Title: scrapbookPage.Title,
        //     //     Gender: scrapbookPage.Gender,
        //     //     Age: scrapbookPage.Age,
        //     //     BirthDate: scrapbookPage.BirthDate,
        //     //     ImageBase64: scrapbookPage.Image != null ? scrapbookPage.Image.toBase64String("png") : null,
        //     //     Lat: scrapbookPage.Lat,
        //     //     Long: scrapbookPage.Long
        //     // };
        // }
        // else {
        //     pages.push(scrapbookPage);
        //     // pages.push({
        //     //     id: scrapbookPage.id,
        //     //     title: scrapbookPage.title,
        //     //     gender: scrapbookPage.gender,
        //     //     year: scrapbookPage.year,
        //     //     month: scrapbookPage.month,
        //     //     day: scrapbookPage.day,
        //     //     imageBase64: scrapbookPage.image != null ? scrapbookPage.image.toBase64String("png") : null,
        //     //     lat: scrapbookPage.lat,
        //     //     long: scrapbookPage.long
        //     // });
        // }

        var json = JSON.stringify(pages);
        file.writeText(json);
    }
}
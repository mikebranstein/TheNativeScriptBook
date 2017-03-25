import { Injectable } from "@angular/core";
import { Page } from "../models/page";
import * as fileSystem from "file-system";
import * as image from "image-source";

@Injectable()
export class FileSystemService {
    getPage(id: number): Page {
        let pages = this.getPages();
        let index = this.findPageIndex(pages, id);

        if (index === -1)
            return null;

        let page = pages[index];
        page.Image = image.fromBase64(page.ImageBase64);
             
        return page;
    }
    
    getPages(): Array<Page> {
        let file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
        let pages = file.readTextSync().length === 0 ? new Array<Page>() : <Array<Page>>JSON.parse(file.readTextSync());

        pages.forEach((page) => {
            page.Image = image.fromBase64(page.ImageBase64);
        });
        
        return pages;
    }

    savePage(scrapbookPage: Page): void {
        let file = fileSystem.knownFolders.documents().getFile("scrapbook.json");
        let pages = this.getPages();
        let index = this.findPageIndex(pages, scrapbookPage.Id);
        let page = new Page();

        page.Id = scrapbookPage.Id;
        page.Title = scrapbookPage.Title;
        page.Gender = scrapbookPage.Gender;
        page.Age = scrapbookPage.Age;
        page.BirthDate = scrapbookPage.BirthDate;
        page.ImageBase64 = scrapbookPage.ImageBase64;
        page.Lat = scrapbookPage.Lat;
        page.Long = scrapbookPage.Long;

        if (index !== -1) {
            pages[index] = scrapbookPage;
        }
        else {
            pages.push(scrapbookPage);
        }

        var json = JSON.stringify(pages);
        file.writeText(json);
    }

    private findPageIndex(pages: any, id: number): number {
        return pages.findIndex(function (element) {
            return element.Id === id;
        });
    }
}
import { ImageSource } from "image-source";

export class Page {
    Id: number;
    Title: string;
    Age: string;
    BirthDate: any;
    Gender: string;
    Lat: number;
    Long: number;
    Image: ImageSource;
    
    get ImageBase64(): string | null {
        return this.Image != null ? this.Image.toBase64String("png") : null;
    };
}
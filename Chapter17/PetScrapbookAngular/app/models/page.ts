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
    ImageBase64: string;
}
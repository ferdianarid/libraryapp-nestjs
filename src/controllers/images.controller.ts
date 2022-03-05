import { Controller, Body, Post, UploadedFile, UseInterceptors, Get, Query } from '@nestjs/common';
import { ImagesService } from 'services/images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImagesDto } from 'dto/upload.images.dto';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export const localStorage = {
       storage: diskStorage({
              destination: "uploads/bookImages",
              filename: (request, file, callback) => {
                     const filename: string = file.originalname.split(".")[0] + uuidv4()
                     const extension: string = extname(file.originalname)
                     const randomFilename = Array(4).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join("")
                     callback(null, `${filename + extension}`)
              }
       })
}

@ApiTags("images")
@Controller({ path: "images" })
export class ImagesController {
       constructor(private imageService: ImagesService) { }

       @Get()
       public async getImages(): Promise<Object> {
              return this.imageService.getImages()
       }

       @Post("upload")
       @UseInterceptors(FileInterceptor("file", localStorage))
       uploadFile(@UploadedFile() file): Observable<Object> {
              console.log(file)
              return of({ imagePath: file.filename })
       }
}


import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

/**
 * Компонент для загрузки файлов
 */
@Component({
  selector: 'jti-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderComponent {
  @ViewChild('uploadContainer') public dropZone!: ElementRef;
  @ViewChild('file') public fileInput!: ElementRef;

  public files: any[] = [];

  public onFileChange(pFileList: File[]){
    this.files.push(pFileList[0]);
  }

  public onInputFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        this.files.push(inputElement.files[i]);
      }
    }
  }
}

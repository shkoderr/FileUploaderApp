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

  onFileChange(pFileList: File[]){
    this.files = Array.from(pFileList);
  }
}

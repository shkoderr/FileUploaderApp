import {
  Directive,
  HostListener,
  HostBinding,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDragDropFile]',
})
export class DragDropFileDirective {
  @Output() private filesChangeEmiter: EventEmitter<File[]> =
    new EventEmitter();

  @HostBinding('style.background') private background = '#ffffff';

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragover');
    this.background = '#f6f6f6';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragleave');
    this.background = '#fff';
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drop');
    this.background = '#fff';
    const files = event.dataTransfer?.files;

    if (files) {
      const validFiles: File[] = Array.from(files);
      this.filesChangeEmiter.emit(validFiles);
    }
  }
}

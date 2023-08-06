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

  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragover');
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('dragleave');
    this.background = '#eee';
    this.borderColor = '#696D7D';
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drop');
    this.background = '#eee';
    this.borderColor = '#696D7D';
    const files = event.dataTransfer?.files;

    if (files) {
      const validFiles: File[] = Array.from(files);
      this.filesChangeEmiter.emit(validFiles);
    }
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() isDroppable: boolean = true;
}

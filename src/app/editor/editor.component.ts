import { Component } from '@angular/core';

import { TemplatesService } from '../_services/templates.service';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  title = 'Editor';
}

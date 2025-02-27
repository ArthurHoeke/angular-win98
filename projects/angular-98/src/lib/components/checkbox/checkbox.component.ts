import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FieldRowComponent } from '../field-row/field-row.component';

@Component({
  selector: 'checkbox-98',
  standalone: true,
  imports: [FormsModule, FieldRowComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() identifier: string = `checkbox-${Math.random().toString(36).substr(2, 9)}`; // id for the checkbox
  @Input() label: string = ''; // Label text
  @Input() checked: boolean = false; // Whether the checkbox is checked
  @Input() disabled: boolean = false; // Whether the checkbox is disabled

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange() {
    // Emit the new value when the checkbox changes
    this.checkedChange.emit(this.checked);
  }
}

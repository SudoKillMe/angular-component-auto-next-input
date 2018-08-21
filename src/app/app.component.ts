import { Component, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import { ListKeyManagerOption, FocusKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { AutoFocusDirective } from './auto-focus.directive';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent implements AfterViewInit {

  form: FormGroup = this.fb.group({
    i0: '',
    i1: '',
    i2: '',
    i3: ''
  });

  @ViewChildren(AutoFocusDirective) inputs: QueryList<AutoFocusDirective>;
  keyManager: FocusKeyManager<AutoFocusDirective>;

  constructor (private fb: FormBuilder) {}

  ngAfterViewInit () {
    this.keyManager = new FocusKeyManager(this.inputs).withWrap();
    this.keyManager.setActiveItem(0);
  }

  // @HostListener('keydown', ['$event'])
  keyup (index) {
    const current = `i${index}`;
    const next = `i${index === this.form.controls.length ? 0 : index + 1}`;
    const input = this.form.controls[current].value;
    if (input.length >= 4) {
      this.keyManager.setActiveItem(index + 1);
    }
    // if ($event.keyCode === UP_ARROW) {
    //   this.keyManager.setPreviousItemActive();
    // } else if ($event.keyCode === DOWN_ARROW) {
    //   this.keyManager.setNextItemActive();
    // }
  }
}

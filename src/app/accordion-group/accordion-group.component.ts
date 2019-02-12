import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroupComponent implements OnInit {
  @Input() title = '';
  @Input() content = '';
  @Output() emitStatus: EventEmitter<any> = new EventEmitter();
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.emitStatus.emit(this.collapsed);
  }
}

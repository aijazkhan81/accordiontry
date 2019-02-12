import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { AccordionGroupComponent } from './../accordion-group/accordion-group.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @Input() oneAtATime = false;
  @ContentChildren(AccordionGroupComponent) acs: QueryList<AccordionGroupComponent>;

  constructor() { }

  ngOnInit() {
    console.log(this.acs);
  }

  test(e) {
    console.log(e);
  }

  ngAfterContentInit(): void {
    this.acs.forEach((a, i) => {
      a.emitStatus.subscribe(this.test(a));
      a.collapsed = i === 0;
    });
  }
}

import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[plRole]'
})
export class RoleDirective implements OnInit, OnChanges {

  @Input()
  plRole: number;

  private hasViewElem: boolean;

  constructor(
    private tmpRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges ): void {
    this.updateViewport ();
  }

  private updateViewport() {
    if ( this.plRole === 1 && !this.hasViewElem ) {
      this.addTmpToViewRef();
    } else if ( this.plRole !== 1 && this.hasViewElem ) {
      this.clearRef();
    }
  }

  private addTmpToViewRef() {
    this.viewContainerRef.createEmbeddedView( this.tmpRef );
    this.hasViewElem = true;
  }

  private clearRef() {
    this.viewContainerRef.clear();
    this.hasViewElem = false;
  }

}

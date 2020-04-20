import { fromEvent } from 'rxjs';

export function handelEventFor( element: string = 'body', event: string = 'click' ) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log ( target, propertyKey, descriptor );
    const htmlElement = document.querySelector ( element );
    const subscription = fromEvent ( htmlElement, event )
      .subscribe (
        descriptor.value.bind ( target ),
        err => console.error( err ),
        () => console.log ( 'fertig' )
      );

    const observer = new MutationObserver( (mutations) => {
      mutations.forEach(mutation => {
        if ( mutation.removedNodes ) {
          mutation.removedNodes.forEach( value => {
            if ( value === htmlElement ) {
              subscription.unsubscribe();
              observer.disconnect();
            }
          });
        }
      });
    });
    observer.observe( htmlElement.parentElement, {childList: true});
  };
}

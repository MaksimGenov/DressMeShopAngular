import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export function zoom(scaleOut: number, scaleIn: number) {
  return trigger('zoom', [
    state('in', style({
      border: '1px solid blue',
      transform: `scale(${scaleIn})`
    })),
    state('out', style({transform: `scale(${scaleOut})`}))
  ])
}
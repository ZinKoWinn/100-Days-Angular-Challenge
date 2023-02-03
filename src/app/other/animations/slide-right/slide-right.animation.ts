import { transition, trigger, style, animate } from '@angular/animations';

export const slideRightAnimation = trigger('slide-right', [
    transition(':enter', [
        style({
            display: 'block',
            transform: 'translateX(-100%'
        }),
        animate('0.5s ease-out')
    ])
]);

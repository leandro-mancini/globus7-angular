import {trigger, animate, style, group, query, transition, state} from '@angular/animations';

export const AppRouterTransition = trigger('routerTransition', [ 
    state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })
    ),
    transition(':enter', [
        style({
            transform: 'scale(2)',
            opacity: 0
        }),
        animate('500ms', style({
            transform: 'scale(1)',
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate('500ms', style({
            transform: 'scale(0.5)',
            opacity: 0
        }))
    ])
]);
import { RouterModule } from '@angular/router';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';

const routes = [
    {
        path: 'UiKit',
        component: UiKitComponent
    },
    { path: '**', component: UiKitComponent }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: true
});

import { RouterModule } from '@angular/router';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { StyleguideComponent } from './pages/ui-kit/styleguide/styleguide.component';
import { ComponentsComponent } from './pages/ui-kit/components/components.component';

const routes = [
    {
        path: 'UiKit',
        component: UiKitComponent,
        children: [
            {
                path: '', 
                redirectTo: 'Styleguide', 
                pathMatch: 'full'
            },
            {
                path: 'Styleguide',
                component: StyleguideComponent
            },
            {
                path: 'Components',
                component: ComponentsComponent
            }
        ]
    }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: true
});

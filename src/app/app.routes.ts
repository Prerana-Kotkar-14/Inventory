import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TotalproductComponent } from './products/totalproduct/totalproduct.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'homepage',
        component: HomepageComponent
    },
    {
        path:'totalproduct',
        component:TotalproductComponent
    },
];

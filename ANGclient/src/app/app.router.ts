/*
Import
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
//

/*
Definition
*/
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
]
//

/*
Export
*/
export const AppRouter: ModuleWithProviders = RouterModule.forChild(routes)
//
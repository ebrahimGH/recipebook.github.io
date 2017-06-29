import { AuthGuard } from './shared/auth.guard';

import { ProtectedComponent } from './protected/protected.component';
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { AppComponent } from './app.component';
import { provideRoutes, Routes, RouterModule } from "@angular/router";

const APP_ROUTES : Routes = [ 
                {path:'',redirectTo:'/signin', pathMatch:'full'},
                {path:'signin',component:SigninComponent},
                {path:'signup',component:SignupComponent},
                {path:'protected',component:ProtectedComponent, canActivate:[AuthGuard]}
        ];
export const routing = RouterModule.forRoot(APP_ROUTES);
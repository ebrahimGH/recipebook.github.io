import { AuthService } from './auth.service';
import { Component } from "@angular/core";

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['signup']" routerActiveLink="active">Sign Up</a></li>
                        <li><a [routerLink]="['signin']" routerActiveLink="active">Sign In</a></li>
                        <li><a [routerLink]="['protected']" routerActiveLink="active">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="logout()" style="cursor:pointer">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `,
    styles:[`
        .active{}
    `]
})
export class HeaderComponent {
     
    constructor(private auth : AuthService) {
         
    }
    isAuth(){
        return this.auth.isAuthenticated();
    }
    logout(){
        this.auth.logout();
    }
}

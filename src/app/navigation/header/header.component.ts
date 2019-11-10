import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sidenavToggle = new EventEmitter<void>();
    isAuthenticated = false;
    authSubscription: Subscription;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.isLoggedIn.subscribe(status => {
            this.isAuthenticated = status;
        });
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }

    onSidenavToggle() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.authService.logout();
    }
}

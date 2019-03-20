import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../core/auth-guard/models/user';
import { UserService } from '../core/auth-guard/user.service';



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}

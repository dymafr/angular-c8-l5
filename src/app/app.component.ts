import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface User {
  firstName: string;
  lastName: string;
}

// Ouvrez la console en cliquant sur console en bas à gauche de la fenêtre preview
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: BehaviorSubject<User | null> = new BehaviorSubject(null);

  ngOnInit() {
    this.user.next({
      firstName: 'Jean',
      lastName: 'Dupuis'
    });

    const s1 = this.user
      .pipe(
        filter((user: User | null) => user != null), // la fonction passée à filter doit retourner un booléen
        map((user: User) => `${user.firstName} ${user.lastName}`)
      )
      .subscribe((fullName: string) => console.log('[s1] : ', fullName));
  }
}

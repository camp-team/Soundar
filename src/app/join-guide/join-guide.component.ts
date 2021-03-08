import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-join-guide',
  templateUrl: './join-guide.component.html',
  styleUrls: ['./join-guide.component.scss'],
})
export class JoinGuideComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

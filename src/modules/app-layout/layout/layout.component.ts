import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/core/services/common/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private readonly storage: StorageService,
    private readonly router: Router
  ) {}

  toggle = true;

  ngOnInit(): void {}

  onLogout() {
    this.storage.clearAllValueFromStorage();
    this.router.navigate(['/authentication/Login']);
  }
}

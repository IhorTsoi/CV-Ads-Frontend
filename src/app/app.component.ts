import {Component, OnInit} from '@angular/core';
import {Token} from './domain/auth/Token';
import {UserManagerService} from './services/user-manager.service';
import {Router} from '@angular/router';
import {Role} from './domain/constants/Role';
import {LanguageSelectorService} from './services/language-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public token: Token;
  public isAdmin: boolean;

  constructor(
    private userManager: UserManagerService,
    private router: Router,
    private languageSelectorService: LanguageSelectorService
  )
  {}

  ngOnInit(): void {
    this.userManager.getTokenUpdateStream().subscribe({
      next: () => {
        this.token = this.userManager.getToken();
        if (this.token !== null) {
          this.isAdmin = this.token.role === Role.ADMIN;
        }
      }
    });
  }

  public async onLogoutAsync(): Promise<void> {
    this.userManager.deleteToken();
    await this.router.navigate(['/login']);
  }

  public onLanguageChange(newLanguage: string): void {
    this.languageSelectorService.setPreferredLanguage(newLanguage);
    // redirect to another locale build
  }
}

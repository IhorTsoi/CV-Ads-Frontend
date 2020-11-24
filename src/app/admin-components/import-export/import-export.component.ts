import { Component, OnInit } from '@angular/core';
import {ImportExportService} from '../../services/api/import-export.service';
import {NotificationService} from '../../services/notification.service';
import {LanguageSelectorService} from '../../services/language-selector.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {
  constructor(
    private importExportService: ImportExportService,
    private notificationService: NotificationService,
    private languageService: LanguageSelectorService
  ) { }

  ngOnInit(): void {
  }

  public async onFileSelectedAsync(event): Promise<void> {
    await this.importExportService.uploadExportedDataAsync(event.target.files[0]);

    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage('Файл було успішно завантажено ✅');
    } else {
      this.notificationService.displayMessage('The file was uploaded successfully ✅');
    }
  }

  public onExport(): void {
    this.importExportService.downloadExportData();

    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage('Завантаження зараз почнеться ✅');
    } else {
      this.notificationService.displayMessage('The downloading is going to start in a few seconds ✅');
    }
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportExportService {

  constructor(private http: HttpClient) { }

  public async uploadExportedDataAsync(file: File): Promise<void> {
    const formData: FormData = new FormData();
    formData.append('formFile', file, file.name);

    await this.http.post(environment.endpoints.import, formData).toPromise();
  }

  public downloadExportData(): void {
    this.http.get(environment.endpoints.export, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe({
      next: response => {
        const url = window.URL.createObjectURL(response.body);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'export.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    });
  }
}

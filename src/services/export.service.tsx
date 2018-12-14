import { saveAs } from 'file-saver';

export class ExportService {
  private static url = "/Apps/ExcelExport/JsonToExcel";

  public static exportToFile(data: any): Promise<void> {
    return fetch(this.url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then((res) => res.blob())
    .then((response: any) => {
        console.log('ressssponse', response);
        
      const file = new Blob([response], { type: "arraybuffer" });
      saveAs(file, 'Sergii-Workbook.xlsx');
    });
  }
}

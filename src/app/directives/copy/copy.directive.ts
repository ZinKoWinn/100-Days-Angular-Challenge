import { Directive, HostListener, Inject, Input } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackBarService: SnackbarService) { }

  @HostListener('click')
  public async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackBarService.callSnackBar('Copied successfully');
    } catch {
      this.snackBarService.callSnackBar('Copied Failed');
    }
  }
}

import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { CopyDirective } from './copy.directive';

describe(CopyDirective.name, () => {
    it('exists', () => {
        // assert
        expect(CopyDirective).toBeDefined();
    });

    describe('General', () => {
        let directive: CopyDirective;
        let nav: any;
        let doc: any;
        let snackBarService: SnackbarService;
        let copiedText = null;
        let command = null;

        beforeEach(() => {
            nav = {
                clipboard: {
                    writeText(text: string) {
                        copiedText = text;
                    }
                }
            };
            doc = {
                execCommand(text: string) {
                    command = text;
                }
            };
            snackBarService = new SnackbarService();
            directive = new CopyDirective(nav as any, doc as any, snackBarService);
        });

        describe('copy', () => {
            it('copies correct text', async () => {
                // arrange
                const text = 'Hello World';
                copiedText = null;
                directive.appCopy = text;

                // act
                await directive.copy();

                // assert
                expect(copiedText).toBe(text);
            });

            it('document copies', async () => {
                // arrange
                command = null;

                // act
                await directive.copy();

                // assert
                expect(command).toBe('copy');
            });

            it('notify snackbar of successful copy', async () => {
                // arrange
                spyOn(directive.snackBarService, 'callSnackBar');

                // act
                await directive.copy();

                // assert
                expect(directive.snackBarService.callSnackBar).toHaveBeenCalledWith('Copied successfully');
            });

            it('notify snackbar of successful copy', async () => {
                // arrange
                spyOn(directive.snackBarService, 'callSnackBar');
                spyOn(directive.navigator.clipboard, 'writeText').and.throwError('');

                // act
                await directive.copy();

                // assert
                expect(directive.snackBarService.callSnackBar).toHaveBeenCalledWith('Copied Failed');
            });
        });
    });
});
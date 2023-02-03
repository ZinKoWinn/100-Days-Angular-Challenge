import { HttpClientMock } from "src/app/mocks/http-client.mock";
import { UserService } from "./user.service";

describe(UserService.name, () => {
    // assert
    it('Exists', () => {
        expect(UserService).toBeDefined();
    });

    describe('General', () => {
        let service: UserService;
        let http: HttpClientMock;

        beforeEach(() => {
            http = new HttpClientMock();
            service = new UserService(http as any);
        });

        describe('getUserById', () => {
            it('hits correct route with id', async () => {
                // arrange
                const id = 5;
                const correctUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
                http.lastUrl = null;

                //act
                await service.getUserById(id).toPromise();

                //assert
                expect(http.lastUrl).toBe(correctUrl);
            });

            it('is a GET call', async () => {
                // arrange
                const id = 5;
                http.lastHtpMethod = null;

                //act
                await service.getUserById(id).toPromise();

                //assert
                expect(http.lastHtpMethod).toBe('GET');
            });

            it('return a User', async () => {
                // arrange
                const id = 5;
                const name = 'Zin Ko Winn';
                http.response = { name };

                //act
                const result = await service.getUserById(id).toPromise();

                //assert
                expect(result.name).toBe('Zin Ko Winn');
            });
        });
    });
});

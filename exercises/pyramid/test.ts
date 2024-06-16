import { pyramid } from './index';


let logSpy:any;
beforeEach(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  pyramid(2);
  expect(logSpy.mock.calls[0][0]).toEqual(' # ');
  expect(logSpy.mock.calls[1][0]).toEqual('###');
  expect(logSpy.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
  pyramid(3);
  expect(logSpy.mock.calls[0][0]).toEqual('  #  ');
  expect(logSpy.mock.calls[1][0]).toEqual(' ### ');
  expect(logSpy.mock.calls[2][0]).toEqual('#####');
  expect(logSpy.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
  pyramid(4);
  expect(logSpy.mock.calls[0][0]).toEqual('   #   ');
  expect(logSpy.mock.calls[1][0]).toEqual('  ###  ');
  expect(logSpy.mock.calls[2][0]).toEqual(' ##### ');
  expect(logSpy.mock.calls[3][0]).toEqual('#######');
  expect(logSpy.mock.calls.length).toEqual(4);
});

import { steps } from './index';

let logSpy:any;
beforeEach(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(logSpy.mock.calls[0][0]).toEqual('#');
  expect(logSpy.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(logSpy.mock.calls[0][0]).toEqual('# ');
  expect(logSpy.mock.calls[1][0]).toEqual('##');
  expect(logSpy.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(logSpy.mock.calls[0][0]).toEqual('#  ');
  expect(logSpy.mock.calls[1][0]).toEqual('## ');
  expect(logSpy.mock.calls[2][0]).toEqual('###');
  expect(logSpy.mock.calls.length).toEqual(3);
});

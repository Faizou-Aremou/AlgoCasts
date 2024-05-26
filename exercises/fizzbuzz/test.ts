import { fizzBuzz } from './index';

let logSpy:any;
test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  fizzBuzz(5);
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(5);
  expect(logSpy).toHaveBeenCalledWith('buzz');
  expect(logSpy.mock.calls).toContainEqual(['fizz']);
  expect(logSpy.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(15);
  expect(logSpy.mock.calls[0][0]).toEqual(1);
  expect(logSpy.mock.calls[1][0]).toEqual(2);
  expect(logSpy.mock.calls[2][0]).toEqual('fizz');
  expect(logSpy.mock.calls[3][0]).toEqual(4);
  expect(logSpy.mock.calls[4][0]).toEqual('buzz');
  expect(logSpy.mock.calls[5][0]).toEqual('fizz');
  expect(logSpy.mock.calls[6][0]).toEqual(7);
  expect(logSpy.mock.calls[7][0]).toEqual(8);
  expect(logSpy.mock.calls[8][0]).toEqual('fizz');
  expect(logSpy.mock.calls[9][0]).toEqual('buzz');
  expect(logSpy.mock.calls[10][0]).toEqual(11);
  expect(logSpy.mock.calls[11][0]).toEqual('fizz');
  expect(logSpy.mock.calls[12][0]).toEqual(13);
  expect(logSpy.mock.calls[13][0]).toEqual(14);
  expect(logSpy.mock.calls[14][0]).toEqual('fizzbuzz');
});

beforeEach(() => {
 logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockRestore();
});

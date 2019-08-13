const testModule = require('../src/module');

test('fun1()', () => {
  expect(testModule.fun1()).toBe('fun1');
});

describe('fun2()', () => {
  let spy;
  beforeEach(() => {
    // spy = jest.spyOn(testModule, 'fun1')
    //   .mockReturnValue('asdf');
    // testModule.fun1 = jest.fn().mockReturnValue('asdf');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('uses mock', () => {
    expect(testModule.fun2()).toBe('fun2 asdf');
  });
});

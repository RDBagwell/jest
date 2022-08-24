const swapi = require('./script2');
const fetch = require('node-fetch');


test('calls swapi to get people', ()=>{
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data=>{
    expect(data.count).toEqual(87);
  })
})

test('calls swapi to get people with promise', ()=>{
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data=>{
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5)
  })
})

test('getPeople returns count and results',()=>{
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: ()=> Promise.resolve({
      count: 87,
      results: [0,1,2,3,4,5]
    })
  }))

  expect.assertions(4)
  return swapi.getPeoplePromise(mockFetch).then(data=>{
    expect(mockFetch.mock.calls.length).toBe(1)
    expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people')
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5)
  })
});

// // Mock functions are also known as "spies", because
// // they let you spy on the behavior of a function that is
// // called indirectly by some other code, rather than just
// // testing the output. You can create a mock function with
// // jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.



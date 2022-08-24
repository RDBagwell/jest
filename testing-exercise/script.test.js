const googleSearch = require('./script');

dbMock = [
  'dogs.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
] 

describe('googleSeach', ()=>{
  test('this is a test', ()=>{
    expect('hello').toBe('hello')
  })
  
  test('is searching google',()=>{
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dogs.com','dogpictures.com']);
  })
  
  test('work with undefind and null input', ()=>{
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })
  
  test('dose not retun more then 3 matches', ()=>{
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })
})
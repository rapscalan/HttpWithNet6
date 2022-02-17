module.exports = rawRequest => {
  
  let arr = rawRequest.split(' ');
  const httpVerb = arr[0];
  const path = arr[1];
  let body = '';
  if(httpVerb !== 'GET'){
    const bodyArray = rawRequest.split('\n');
    body = bodyArray[bodyArray.length - 1];
  }
  let result = {
    method: httpVerb,
    path: path
  };
  if(httpVerb === 'GET'){
    result = {
      method: httpVerb,
      path: path
    }; 
  } 
  else {
    result = {
      method: httpVerb,
      path: path,
      body: body
    };
  }
  return result;
};
  



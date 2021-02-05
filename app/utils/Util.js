import config from './../../config';

export function uuidv4() {

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        
    .replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

//Random alpha-numeric string
export function randomString(length, chars) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if(typeof chars == 'undefined' || chars == null || chars == "") {
       chars = characters;
    }
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

//Enable log
export function consoleLog(name,method,msg) {
  if(enableLog!= undefined && enableLog)    {
     console.log(name+"::"+method+" - "+msg) ;
  }
}
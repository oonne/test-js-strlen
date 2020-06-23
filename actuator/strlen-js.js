let strlen = (str) => {
  if (!str) return 0;
  let len = 0;
  for (var i=0; i<str.length; i++) { 
    let c = str.charCodeAt(i); 
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
      len++; 
    } else { 
     len+=3; 
    } 
  } 
  return len;
}

module.exports = strlen;
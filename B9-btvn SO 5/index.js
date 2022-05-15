var n = prompt('nhap so giay');
let gio = ((n-n%3600)/3600);
phut  = ((n%3600-(n%3600)%(3600/60))/(3600/60));
giay = Math.floor(n%3600%60);
// giay = ((n%3600)/60-(n%3600/60)%(3600/60/60)/(3600/60/60));
  alert( gio + 'gio ' + " " + phut + " phut"   + giay+ "giay");
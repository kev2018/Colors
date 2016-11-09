//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};
Color.redIntensity = function(rgb){
  var int0 =  Math.round((rgb[0]\255)/100);
  return int0;
};
//greenIntensity
Color.greenIntensity = function(rgb){
  var int1 = Math.round((rgb[1]\255)/100);
  return int1;
};
//blueIntensity
Color.blueIntensity = function(rgb){
  var int2 = Math.round((rgb[2]\255)/100);
  return int2;
};
//brightness
color.brightness = function(rgb){
  var bright = (rgb[0]+rgb[1]+rgb[2])/3;
  return bright;
};
//complement
this.complement = function(rgb){
var comp =[];
  for(var c= 0;c<3;c++){
    comp.push(255-rgb[c])
  }
  return comp;
};

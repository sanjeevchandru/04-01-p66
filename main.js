document.write("30.to check whether a string 'Script' appears at the 5th (index 4) position in a given string. If 'Script' appears in the string, return the string without 'Script' otherwise return the original one."+"<br>");
function test30(str){
    if(str.length<6){
        return str;
    }
    console.log(str.substring(4));
    if(str.substring(4)=="Script"){
        return str.substring(0,4);
    }
    return str;
}
document.write("The string is :JavaScript ,Ans :"+test30("JavaScript")+"<br>");
document.write("The string is :CoffeeScript ,Ans :"+test30("CoffeeScript")+"<br><br>");
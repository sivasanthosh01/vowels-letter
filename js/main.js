var a=prompt("Enter the string value");
document.write("The string value is:&nbsp;"+a+"<br>");
var b=a.split('');
console.log(b);
var c=[];
console.log(b);
document.write("split<br>"+b+"<br>");
for(i=0;i<b.length;i++)
{
if((b[i]=="a")||(b[i]=="e")||(b[i]=="i")||(b[i]=="o")||(b[i]=="u")||(b[i]=="A")||(b[i]=="E")||(b[i]=="I")||(b[i]=="O")||(b[i]=="U"))
{
	c.push(b[i]);
	
}
}
console.log(c);
document.write("Vowels from string value<br>"+c);
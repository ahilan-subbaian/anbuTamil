var LetterArray;
var currURL, startpos, letter, letterpos, slashpos, currfile, switchfile;

LetterArray = new Array("A", "B", "C", "D", "E", "G","H", "I", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y");
currURL = document.URL;
startpos = currURL.indexOf("Names",1);
letter = currURL.substr(startpos + 5, 1);
slashpos = currURL.lastIndexOf("//");
if (slashpos = -1) slashpos = currURL.lastIndexOf("\\");

currfile = currURL.substr(slashpos + 1, startpos - slashpos + 4);

<!-- window.alert("slashpos - " + slashpos);
<!-- window.alert("currfile - " + currfile);
<!-- window.alert("URL - " + document.URL);
<!-- window.alert("href - " + document.location.href);

<!-- switch (currfile) {
<!-- 	case 'BoyNames': 	 switchfile = 'GirlNames'; break;
<!-- 	case 'GirlNames': 	 switchfile = 'BoyNames'; break;
<!-- 	case 'TBoyNames': switchfile = 'TGirlNames'; break;
<!-- 	case 'TGirlNames':	 switchfile = 'TBoyNames'; break;
<!-- }

if ( currURL.indexOf("TBoyNames") != -1)	{switchfile = 'TGirlNames'; 	}
else if ( currURL.indexOf("TGirlNames") != -1)	{switchfile = 'TBoyNames';	}
else if ( currURL.indexOf("BoyNames") != -1) 	{switchfile = 'GirlNames'; 	}
else if ( currURL.indexOf("GirlNames") != -1) 	{switchfile = 'BoyNames';	}

<!-- window.alert("switchfile:" + switchfile);

for (i=0 ; i < LetterArray.length ; i++ ) {
	if ( LetterArray[i] == letter ) {
	letterpos = i;
	break;
	}
}

document.write("<center><table><tr><td valign=center>");

if ( letterpos == 0 ) {
	document.write("<a href='" + switchfile + "Y.htm'><img src='arrowLeft.gif' alt='Previous Page' border=0></a>&nbsp;&nbsp;");
}
else {	document.write("<a href='" + currfile + LetterArray[letterpos - 1] + ".htm'><img src='arrowLeft.gif' alt='Previous Page' border=0></a>&nbsp;&nbsp;");
}

document.write("</td><td valign=top>");

for (i=0 ; i < LetterArray.length ; i++ ) {
	
	if ( LetterArray[i] == letter ) {
	document.writeln("<font color=red size=5><b>" + LetterArray[i] + "</b></font>&nbsp");
	} 
	else {
	document.writeln("<a href='" + currfile + LetterArray[i] + ".htm'>" + LetterArray[i] + "</a>&nbsp");
	}
}

document.write("</td><td valign=center>");

if ( letterpos < (LetterArray.length - 1) ) {
	document.write("<a href='" + currfile + LetterArray[letterpos + 1] + ".htm'><img src='arrowRight.gif' alt='Next Page' border=0></a>");
}
else {	document.write("<a href='" + switchfile + "A.htm'><img src='arrowRight.gif' alt='Next Page' border=0></a>");
}

document.write("</td></tr></table></center>");
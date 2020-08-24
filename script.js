var isall = true;
var txtfield = document.getElementById('inputgen').value;
var finaltxt = new String;

function toggleall(allbtn){
	allbtn.classList.toggle('tgall');
	isall=!isall;
}

function genfile(){
	finaltxt='~j::\nIfWinActive, League of Legends (TM) Client\n{\n';
	if(isall)
		finaltxt+='Send {SHIFT down}\n';
	finaltxt+='Send {Enter}\n';
	if(isall)
		finaltxt+='Send {SHIFT up}\n';
	for(i=0; i<txtfield.length; i++)
	{
		var cchar = txtfield.charAt(i);
		if(cchar==' ')
			cchar="SPACE";
		finaltxt=finaltxt+'send {'+cchar+' down}\n';
		finaltxt=finaltxt+'send {'+cchar+' up}\n';
	}
	finaltxt+='Send {Enter}\n';
	finaltxt+='}';
	var blob = new Blob([finaltxt], {type: "text/plain;charset=utf-8"});
	window.saveAs(blob, "ahkgeneratedscript.ahk");
}

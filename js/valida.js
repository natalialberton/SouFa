function validaFormulario() {
	
	if(document.frmfaleconosco.txtnome.value=="") {
		alert("Preencha o campo nome!");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	
	else if(document.frmfaleconosco.txtfone.value=="") {
		alert("Preencha o campo telefone!");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}
	
	else if(document.frmfaleconosco.emlemail.value=="") {
		alert("Preencha o campo email!");
		document.frmfaleconosco.emlemail.focus();
		return false;
	}
	
	else if(document.frmfaleconosco.selmotivo.value=="") {
		alert("Preencha o campo motivo do contato!");
		document.frmfaleconosco.selmotivo.focus();
		return false;
	}
	
	else if(document.frmfaleconosco.txtcomentario.value=="") {
		alert("Preencha o campo comentário!");
		document.frmfaleconosco.txtcomentario.focus();
		return false;
	}
}
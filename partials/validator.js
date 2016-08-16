
function isEmpty(val){
	str = val.toString().trim();
	return val !== '';
}

var Validate = function () {
	var valid = true;
	var requiredInputs = document.querySelectorAll('.form-abe[data-pattern]');

	Array.prototype.forEach.call(requiredInputs, (input) => {
		var daddy = input.parentNode;
		var pattern = input.getAttribute('data-pattern');
		var rex = new RegExp(pattern);
		if(daddy.classList.contains('not-valid')) daddy.classList.remove('not-valid');
		if(daddy.getAttribute('data-error')) daddy.removeAttribute('data-error');
		if(!isEmpty(input.value)){
			daddy.classList.add('not-valid');
			daddy.setAttribute('data-error', 'Error : empty field');
			valid = false;
		}

		if(pattern !== '' && !rex.test(input.value)) {
			daddy.classList.add('not-valid');
			daddy.setAttribute('data-error', 'Error : value not valid');
			valid = false;
		}
	});

	return valid;
}

abe.json.saving(function (e) {
	if(e.type === 'draft' || e.type === 'reject') return;
	console.log(!Validate())
  if(!Validate()) abe.json.canSave = false;
});


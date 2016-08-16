'use strict';

var hooks = {
	afterAbeAttributes: function afterAbeAttributes(obj, str, json, abe) {
		var pattern = abe.getAttr(str, 'pattern')
		if(str.indexOf('pattern=') > -1) obj.pattern = pattern;
		return obj
	},
	afterEditorInput: function afterEditorInput(htmlString, params, abe) {
		if(typeof params.pattern !== 'undefined' && params.pattern !== null) {
			htmlString = htmlString.replace(/(form-abe\")/g, '$1 data-pattern="' + params.pattern + '"');
		}

		return htmlString;
	}
};

exports.default = hooks;

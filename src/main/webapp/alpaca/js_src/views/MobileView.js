(function($) {

	var Alpaca = $.alpaca;
	
	Alpaca.registerView({
		parent: 'WEB_EDIT',
		id: "MOBILE_EDIT",
		description: "Mobile Edit View",
		type: "edit",
		"legendStyle": "link",
		"toolbarStyle": "link",
		templates: {
			// Templates for control fields
			controlFieldOuterEl: '<div data-role="fieldcontain">{{html this.html}}</div>',
			controlFieldMessage: '<div>* ${message}</div>',
			controlFieldLabel: '{{if options.label}}<label for="${id}" class="{{if options.labelClass}}${options.labelClass}{{/if}}">${options.label}</label>{{/if}}',
			controlFieldHelper: '{{if options.helper}}<div class="{{if options.helperClass}}${options.helperClass}{{/if}}">${options.helper}</div>{{/if}}',
			controlFieldContainer: '<div data-replace="true">{{html this.html}}</div>',
			controlField: '{{wrap(null, {}) Alpaca.fieldTemplate(this,"controlFieldOuterEl",true)}}{{html Alpaca.fieldTemplate(this,"controlFieldLabel")}}{{wrap(null, {}) Alpaca.fieldTemplate(this,"controlFieldContainer",true)}}{{/wrap}}{{html Alpaca.fieldTemplate(this,"controlFieldHelper")}}{{/wrap}}',
			// Templates for container fields
			fieldSetOuterEl: '<fieldset data-role="collapsible" id="${id}">{{html this.html}}</fieldset>',
			fieldSetMessage: '<div>* ${message}</div>',
			fieldSetLegend: '{{if options.label}}<legend for="${id}" class="{{if options.labelClass}}${options.labelClass}{{/if}}">${options.label}</legend>{{/if}}',
			fieldSetHelper: '{{if options.helper}}<h3 class="{{if options.helperClass}}${options.helperClass}{{/if}}">${options.helper}</h3>{{/if}}',
			fieldSetItemsContainer: '<div data-role="controlgroup">{{html this.html}}</div>',
			fieldSet: '{{wrap(null, {}) Alpaca.fieldTemplate(this,"fieldSetOuterEl",true)}}{{html Alpaca.fieldTemplate(this,"fieldSetLegend")}}{{html Alpaca.fieldTemplate(this,"fieldSetHelper")}}{{wrap(null, {}) Alpaca.fieldTemplate(this,"fieldSetItemsContainer",true)}}{{/wrap}}{{/wrap}}',
			fieldSetItemContainer: '<div></div>',
			// Templates for form
			formFieldsContainer: '<div data-role="content">{{html this.html}}</div>',
			formButtonsContainer: '<fieldset class="ui-grid-a">{{html this.html}}</fieldset>',
			form: '<form>{{html Alpaca.fieldTemplate(this,"formFieldsContainer")}}{{html Alpaca.fieldTemplate(this,"formButtonsContainer")}}</form>',
			// Controls
			controlFieldRadio: '<fieldset data-role="controlgroup" id="${id}">{{each selectOptions}}<input type="radio" {{if options.readonly}}readonly="on"{{/if}} name="${formName}" id="${id}-${$index}}" value="${value}" {{if value == data}}checked="checked"{{/if}}/><label for="${id}-${$index}}">${text}</label>{{/each}}</fieldset>',
			controlFieldCheckbox: '<fieldset data-role="controlgroup" id="${id}-0"><input type="checkbox" id="${id}-1" name="${id}-1" {{if options.readonly}}readonly="on"{{/if}} {{if options.formName}}name="${options.formName}"{{/if}} {{each options.data}}data-${fieldId}="${value}"{{/each}}/>{{if options.rightLabel}}<label for="${id}-1">${options.rightLabel}</label>{{else}}{{if options.label}}<label for="${id}-1">${options.label}?</label>{{/if}}{{/if}}</fieldset>',
			arrayItemToolbar: '<div class="alpaca-fieldset-array-item-toolbar" data-role="controlgroup" data-type="horizontal"><span class="alpaca-fieldset-array-item-toolbar-add" data-role="button" data-icon="add" data-iconpos="notext">Add</span><span class="alpaca-fieldset-array-item-toolbar-remove" data-role="button" data-icon="delete" data-iconpos="notext">Delete</span><span class="alpaca-fieldset-array-item-toolbar-up" data-role="button" data-icon="arrow-u" data-iconpos="notext">Up</span><span class="alpaca-fieldset-array-item-toolbar-down" data-role="button" data-icon="arrow-d" data-iconpos="notext">Down</span></div>',
			arrayToolbar: '<div class="alpaca-fieldset-array-toolbar"><span class="alpaca-fieldset-array-toolbar-icon alpaca-fieldset-array-toolbar-add" data-role="button" data-icon="add" title="Add">Add</span></div>'
		},
		messages: {
			required: "Required Field",
			invalid: "Invalid Field"
		},
		"render": function(field, renderedCallback) {
			$('<div data-role="page" data-theme="' + field.container.attr('data-theme') + '" id="' + field.id + '-mobile-page"><div data-role="header" data-theme="' + field.container.attr('data-theme') + '"><h1>' + field.container.attr('data-header') + '</h1></div></div>').hide().appendTo(field.container);
			field.container = $('#' + field.id + '-mobile-page', field.container);
			field.render(renderedCallback);
		},
		"postRender": function(renderedControl) {
			renderedControl.container.page().show();
			$('.ui-collapsible-heading', renderedControl.container).css('margin', '0');
		}
	});
})(jQuery);
/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.29
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";var b=function(b,c){var d=function(){var c=a(this),d=!!a.formUtils.getValue(c),f=c.valAttr("depends-on")||c.valAttr("if-checked");if(f){var g=a.formUtils.getValue('[name="'+f+'"]',b),h=c.valAttr("depends-on-value"),i=!g||h&&!e(g,h);i&&!d&&c.valAttr("skipped","1")}},e=function(b,c){return a.inArray(b.toLocaleLowerCase(),a.split(c.toLocaleLowerCase()))>-1},f=function(){var b=a(this),d=this.$dependingInput,e=a.formUtils.getValue(b),f=b.valAttr("depending-value"),g=!!a.formUtils.getValue(d),h=!e||f&&f!==e;h&&!g&&a.formUtils.dialogs.removeInputStylingAndMessage(d,c)};b.find("[data-validation-depends-on]").off("beforeValidation",d).on("beforeValidation",d).each(function(){var c=a(this);b.find('[name="'+c.valAttr("depends-on")+'"]').each(function(){a(this).off("change",f).on("change",f).valAttr("depending-value",c.valAttr("depends-on-value")),this.$dependingInput=c})})},c=function(b,c){var d=function(){var c=a(this),d=c.valAttr("optional-if-answered"),e=!1,f=!!a.formUtils.getValue(c);f||(a.each(a.split(d),function(c,d){var f=b.find('[name="'+d+'"]');return e=!!a.formUtils.getValue(f),e?!1:void 0}),e&&c.valAttr("skipped",1))},e=function(){var d=a(this),e=d.valAttr("optional-if-answered");a.each(a.split(e),function(d,e){var f=b.find('[name="'+e+'"]'),g=!!a.formUtils.getValue(f);g||a.formUtils.dialogs.removeInputStylingAndMessage(f,c)})};b.find("[data-validation-optional-if-answered]").off("beforeValidation",d).on("beforeValidation",d).each(function(){a(this).off("change",e).on("change",e)})};a.formUtils.$win.bind("validatorsLoaded formValidationSetup",function(d,e,f){e||(e=a("form")),b(e,f),c(e,f)})}(a)});
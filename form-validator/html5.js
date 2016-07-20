/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.29
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){"use strict";var b="placeholder"in document.createElement("INPUT"),c="options"in document.createElement("DATALIST"),d=!1,e=function(e){e.each(function(){var e=a(this),f=e.find("input,textarea,select"),g=!1;f.each(function(){var b=[],e=a(this),f=e.attr("required"),h={};switch(f&&b.push("required"),(e.attr("type")||"").toLowerCase()){case"time":b.push("time"),a.formUtils.validators.validate_date||d||(d=!0,a.formUtils.loadModules("date"));break;case"url":b.push("url");break;case"email":b.push("email");break;case"date":b.push("date");break;case"number":b.push("number");var i=e.attr("max"),j=e.attr("min");(j||i)&&(j||(j="0"),i||(i="9007199254740992"),h["data-validation-allowing"]="range["+j+";"+i+"]",0!==j.indexOf("-")&&0!==i.indexOf("-")||(h["data-validation-allowing"]+=",negative"),(j.indexOf(".")>-1||i.indexOf(".")>-1)&&(h["data-validation-allowing"]+=",float"))}if(e.attr("pattern")&&(b.push("custom"),h["data-validation-regexp"]=e.attr("pattern")),e.attr("maxlength")&&(b.push("length"),h["data-validation-length"]="max"+e.attr("maxlength")),!c&&e.attr("list")){var k=[],l=a("#"+e.attr("list"));if(l.find("option").each(function(){k.push(a(this).text())}),0===k.length){var m=a.trim(a("#"+e.attr("list")).text()).split("\n");a.each(m,function(b,c){k.push(a.trim(c))})}l.remove(),a.formUtils.suggest(e,k)}if(b.length){f||(h["data-validation-optional"]="true"),g=!0;var n=(e.attr("data-validation")||"")+" "+b.join(" ");e.attr("data-validation",a.trim(n)),a.each(h,function(a,b){e.attr(a,b)})}}),g&&e.trigger("html5ValidationAttrsFound"),b||f.filter("input[placeholder]").each(function(){this.defaultValue=this.getAttribute("placeholder"),a(this).bind("focus",function(){this.value===this.defaultValue&&(this.value="",a(this).removeClass("showing-placeholder"))}).bind("blur",function(){""===a.trim(this.value)&&(this.value=this.defaultValue,a(this).addClass("showing-placeholder"))})})})};a.formUtils.$win.bind("validatorsLoaded formValidationSetup",function(b,c){c||(c=a("form")),e(c)}),a.formUtils.setupValidationUsingHTML5Attr=e}(a,window)});
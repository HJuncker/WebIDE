/*global QUnit*/

sap.ui.define([
	"Test_Henry/Test_Henry/controller/Test_viewtype.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test_viewtype Controller");

	QUnit.test("I should test the Test_viewtype controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
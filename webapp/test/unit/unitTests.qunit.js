/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Test_Henry/Test_Henry/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
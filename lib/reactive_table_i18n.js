// Minimal i18n stub — only English strings. Replaces the anti:i18n dep which
// pins old Meteor versions. Add more locales here if needed.
var strings = {
	"reactiveTable.filter": "Filter",
	"reactiveTable.columns": "Columns",
	"reactiveTable.show": "Show",
	"reactiveTable.rowsPerPage": "rows per page",
	"reactiveTable.page": "Page",
	"reactiveTable.of": "of",
};

var previousI18n = Blaze._globalHelpers && Blaze._globalHelpers.i18n;

Template.registerHelper("i18n", function (key) {
	if (strings[key])
		return strings[key];

	if (typeof previousI18n === "function")
		return previousI18n.apply(this, arguments);

	return key;
});

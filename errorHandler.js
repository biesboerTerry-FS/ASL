const { ContactResourceError } = require("@jworkman-fs/asl"); // <--- Add this import

const handleErrors = (e, res) => {
	// Logging the error is helpful for debugging during the deadline
	console.error("Error Caught:", e.name, e.message);

	switch (e.name) {
		case "InvalidContactError":
		case "InvalidContactFieldError":
		case "InvalidContactSchemaError":
		case "InvalidEnumError":
		case "DuplicateContactResourceError":
		case "PagerLimitExceededError":
		case "BlankContactFieldError":
		case "ContactResourceError":
			return res.status(400).json({
				message: `An error has occured: ${e.message}`,
			});

		case "ContactNotFoundError":
			return res.status(404).json({
				message: `An error has occured: ${e.message}`,
			});

		case "PagerOutOfRangeError":
			return res.status(416).json({
				message: `An error has occured: ${e.message}`,
			});

		default:
			return res.status(500).json({
				message: `An error has occured: ${e.message}`,
			});
	}
};

module.exports = { handleErrors };

const express = require("express");
const app = express();
const {
	ContactModel,
	Pager,
	sortContacts,
	filterContacts,
	// contacts,
	// ContactResourceError,
} = require("@jworkman-fs/asl");

const { handleErrors } = require("./errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1Router = express.Router();

// Pass everything to the routes
require("./contactRoutes")(v1Router, {
	ContactModel,
	Pager,
	sortContacts,
	filterContacts,
	// contacts,
	handleErrors,
	// ContactResourceError,
});

app.use("/v1", v1Router);

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

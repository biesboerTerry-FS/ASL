module.exports = (
	app,
	{ ContactModel, Pager, sortContacts, filterContacts, handleErrors },
) => {
	app.get("/contacts", (req, res) => {
		try {
			const filterBy = req.get("X-Filter-By");
			const operator = req.get("X-Filter-Operator");
			const value = req.get("X-Filter-Value");

			let result = ContactModel.index();

			if (filterBy && operator && value) {
				result = filterContacts(filterBy, operator, value, result);
			}

			const { sort, direction } = req.query;
			if (sort) {
				result = sortContacts(direction || "asc", sort, result);
			}

			const page = parseInt(req.query.page) || 1;
			const limit = parseInt(req.query.limit) || 10;

			const pager = new Pager(result, page, limit);

			res.set("X-Results-Total", pager.total);
			res.set("X-Page-Next", pager.next());
			res.set("X-Page-Prev", pager.prev());

			res.json(pager.results());
		} catch (e) {
			handleErrors(e, res);
		}
	});

	app.get("/contacts/:id", (req, res) => {
		try {
			res.json(ContactModel.show(req.params.id));
		} catch (e) {
			handleErrors(e, res);
		}
	});

	app.post("/contacts", (req, res) => {
		try {
			const newContact = ContactModel.create(req.body);
			res.status(303).location(`/v1/contacts/${newContact.id}`).end();
		} catch (e) {
			handleErrors(e, res);
		}
	});

	app.put("/contacts/:id", (req, res) => {
		try {
			ContactModel.update(req.params.id, req.body);
			res.status(303).location(`/v1/contacts/${req.params.id}`).end();
		} catch (e) {
			handleErrors(e, res);
		}
	});

	app.delete("/contacts/:id", (req, res) => {
		try {
			ContactModel.remove(req.params.id);
			res.status(303).location("/v1/contacts").end();
		} catch (e) {
			handleErrors(e, res);
		}
	});
};

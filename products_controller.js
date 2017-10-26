module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;
    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .read_product([params.id])
      .then(product => res.status(200).send(product))
      .catch(() => res.status(500).send());
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_products([params.id, query.desc])
      .then(product => res.status(200).send())
      .catch(() => res.status(500).send());
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .delete_product([params.id])
      .then(product => res.status(500).send())
      .catch(() => res.status(500).send());
  }
};

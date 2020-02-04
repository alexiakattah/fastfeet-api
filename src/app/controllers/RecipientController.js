import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      complement: Yup.string(),
      number: Yup.string().required(),
      zip_code: Yup.string().required(),
      uf: Yup.string()
        .required()
        .max(2),
      city: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }
    const newRecipient = await Recipient.create(req.body);

    return res.status(201).json(newRecipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      zip_code: Yup.string(),

      street: Yup.string().when('zip_code', (zip_code, field) =>
        zip_code ? field.required() : field
      ),
      complement: Yup.string(),
      number: Yup.string(),
      uf: Yup.string().max(2),

      city: Yup.string().when('uf', (uf, field) =>
        uf ? field.required() : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exist.' });
    }

    const newRecipient = await recipient.update(req.body);

    return res.status(200).json(newRecipient);
  }
}

export default new RecipientController();

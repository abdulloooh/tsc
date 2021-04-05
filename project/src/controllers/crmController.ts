import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req: any, res: any) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req: any, res: any) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithID = (req: any, res: any) => {
  Contact.findById(req.params.contactId, (err: any, contact: any) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContact = (req: any, res: any) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req: any, res: any) => {
  Contact.remove({ _id: req.params.contactId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted contact" });
  });
};

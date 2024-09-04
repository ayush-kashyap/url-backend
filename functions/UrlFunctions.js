import { Router } from "express";
import { genId } from "./IDgenerator.js";
import { UrlModel } from "../Schemas/Url.js";

const router = Router();

const createUrl = async (req, res) => {
  var data = req.body;
  if (data.url != "") {
    try {
      var url = await UrlModel.findOne({ url: data.url });
      if (!url) {
        data.shortid = genId(12);
        await UrlModel.create(data);
        res.status(201).send({ id: data.shortid });
      } else {
        res.status(200).send({id:url.shortid});
      }
    } catch (error) {
      res.status(500).send();
    }
  } else {
    res.status(404).send();
  }
};
const getUrl = async (req, res) => {
  const id = req.params.id;
  if (id != "") {
    try {
      var urlData = await UrlModel.findOne({ shortid: id });
      if (urlData) {
        res.status(200).send({ url: urlData.url });
      } else {
        res.status(404).send();
      }
    } catch (error) {
      res.status(500).send();
    }
  } else {
    res.status(404).send();
  }
};

router.post("/create", createUrl);
router.get("/get/:id", getUrl);

export { router as createUrl };

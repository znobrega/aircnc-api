import Spot from "../models/Spot";
import User from "../models/User";

class SpotController {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  }

  async store(req, res) {
    const { company, price, techs } = req.body;
    const { filename } = req.file;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const spot = await Spot.create({
      thumbnail: filename,
      company,
      price,
      techs: techs.split(",").map(tech => tech.trim()),
      user: user_id
    });

    return res.json(spot);
  }
}

export default new SpotController();

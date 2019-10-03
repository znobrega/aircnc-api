import Booking from "../models/Booking";
import Spot from "../models/Spot";
import User from "../models/User";

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const spot = await Spot.findById(spot_id);
    const user = await User.findById(user_id);

    console.log(user);

    if (!spot || !user)
      return res.status(400).json({ error: "User or Spot doesn't exist" });

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
      approved: true
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json(booking);
  }
}

export default new BookingController();

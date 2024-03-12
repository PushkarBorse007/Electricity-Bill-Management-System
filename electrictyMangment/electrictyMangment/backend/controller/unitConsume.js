import Users from "../model/Users.js";

const getUnitValueByMonth = async (req, res) => {
  try {
    const { id, monthNumber } = req.body;
    const findUser = await Users.findById(id);
    if (!findUser) {
      return res.status(500).json("User not found!");
    }

    const monthlyUnits = findUser.monthlyUnits || [];

    const monthUnitValue = monthlyUnits.find(
      (item) => item.month == monthNumber
    );
    if (!monthUnitValue) {
      return res.status(500).json("This month units are not available");
    }
    return res.status(201).json(monthUnitValue);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal Server Issue");
  }
};

export default getUnitValueByMonth;

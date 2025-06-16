import { RequestHandler } from "express";
import userRepository from "./userRepository";

// B R E A D

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await userRepository.create(req.body);

    res.status(201).json({
      message: "Utilisateur dans la BDD",
      insertId: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export { add };

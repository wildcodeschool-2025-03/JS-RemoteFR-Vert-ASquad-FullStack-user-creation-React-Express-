import { RequestHandler } from "express";
import userRepository from "../modules/user/userRepository";

export const checkEmail: RequestHandler = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await userRepository.readByEmail(email);

    if (user) {
      res.status(403).json({
        message: "Cette adresse e-mail est déjà utilisée",
      });
      return;
    }

    next();
  } catch (e) {
    next(e);
  }
};

export const checkEmailAndStoreUserData = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await userRepository.readByEmail(email);

    if (!user) {
      res.status(403).json({
        message: "La combinaison email/mot de passe n'existe pas",
      });
      return;
    }

    req.body.current_password = user.password;

    next();
  } catch (e) {
    next(e);
  }
};

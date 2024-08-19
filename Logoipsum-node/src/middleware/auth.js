import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader  = req.headers.authorization;

  if (!authHeader  || !authHeader .startsWith("Bearer ")) {
    return res.status(401).json({ message: "user is not authenticated" });
  }
  try {
  const token = authHeader.split(" ")[1];

  const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.currentUser = payload.user;

    return next();
} catch (err) {
    console.log("Authentication error: ", err);
    return res.status(401).json({ message: "Invalid or expired token" });
}
}

export default auth;
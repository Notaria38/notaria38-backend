const login = (req, res) => {
  console.log("Login attempt:", req.body);
  res.json({
    message: "Login received successfully",
    timestamp: new Date().toISOString()
  });
};

module.exports = { login };
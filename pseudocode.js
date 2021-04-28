module.exports = function(app) {
    app.get("/test", function(req, res) {
      return res.json({test: "success"});
    });
  
    // User Routes
    app.post("/signup", async function(req, res) {
      // Assumption is being made that User will be the name of our User Schema.
      // Once the Model User Schema is created, we can require it for this to work.
      const user = new User(req.body);
      
      try {
        await user.save()
        // This does not include authentication logic at the moment and only returns the user;
        res.status(201).send({
          user
        })
      } catch(e) {
        res.status(400).send(e)
      } 
    })
  
    // User Authentication will be used here during login in
    app.post("/login", async function(req, res) {
  
      try {
        const user = await User.find({
          email: req.body.email,
          password: req.body.password
        })
  
        res.status(201).send({
          user
        })
  
      } catch(e) {
        res.status(400).send(e)
      }
    })
  
  
  
  
      // /goals
      // GET: 
        // Goals
  
      // /meals
      // GET:
        // Saved Meals
  
      // /logout
      // DB_LOGIC:
        // Logout
  
      
      
    // Nutrition routes
    // Goal Routes
    // Ingredient Routes
    // Recipe Routes
    // Saved Meals Routes
  };
  
    
  
  
  
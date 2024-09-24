const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

// Update with your actual credentials and connection string
mongoose.connect("mongodb+srv://chirsh1:mIl5JhLdHdwOLIxc@group8cluster.w9iln.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

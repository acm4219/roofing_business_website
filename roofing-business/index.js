const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./controllers/apiRoutes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        )
    })
})
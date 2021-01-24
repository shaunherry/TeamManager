const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/team', {useNewUrlParser:true,
useUnifiedTopology:true})
    .then(response => console.log('database connection established'))
    .catch(error => console.log(error))
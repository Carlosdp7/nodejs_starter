const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('DB Connected')
} catch (err) {
  console.log(err)
  console.log('Error')
}
import mongoose from 'mongoose'

const application = new mongoose.Schema({
        haxtreme_id: String,
        data:  Object

});

const post = mongoose.model("application", application)

export {post} 
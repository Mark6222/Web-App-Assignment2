import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  gender: { type: Number },
  profile_path: { type: String },
  known_for: [{
    id: { type: Number },
    media_type: { type: String },
    title: { type: String },
    name: { type: String },
    poster_path: { type: String },
  }],
  popularity: { type: Number },
  birthday: { type: String },
  deathday: { type: String },
  place_of_birth: { type: String },
  biography: { type: String },
});

PersonSchema.statics.findByPersonId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('People', PersonSchema);
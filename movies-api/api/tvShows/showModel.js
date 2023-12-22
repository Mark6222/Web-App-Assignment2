import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TVShowSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    poster_path: { type: String },
    overview: { type: String },
    first_air_date: { type: String },
    original_name: { type: String },
    genre_ids: [{ type: Number }],
    original_language: { type: String },
    backdrop_path: { type: String },
    popularity: { type: Number },
    vote_count: { type: Number },
    vote_average: { type: Number },
    origin_country: [{ type: String }],
    number_of_episodes: { type: Number },
    number_of_seasons: { type: Number },
    status: { type: String },
    tagline: { type: String },
});

TVShowSchema.statics.findByTVDBId = function (id) {
    return this.findOne({ id: id });
};

export default mongoose.model('Show', TVShowSchema);


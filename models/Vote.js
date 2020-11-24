import mongoose from 'mongoose';

const VotingSchema = new mongoose.Schema({
    name: {
        /**
         * Name of the Player
         */

         type: String,
         required: [true, 'Please provide a name for this player.'],
         maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    voters_name: {
        /**
         * Name of the avatar for the player
         */

         type: String,
         required: [true, 'Please provide an avatar name for this player.'],
         maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    score: {
        /**
         * Color of the player
         */

         type: Number,
         required: [true, 'Please provide the score'],
    },
});

export default mongoose.models.Vote || mongoose.model('Vote', VotingSchema)
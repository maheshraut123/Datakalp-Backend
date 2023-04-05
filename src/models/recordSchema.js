const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const recordsSchema = new mongoose.Schema(
  {
    p_id: {
      type: String,
    },
    Date_Time: {
      type: Date,
    },
    videoid: { type: String },
    results: {
      step_2: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      },
      step_3: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      },
      step_4: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      },
      step_5: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      },
      step_6: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      },
      step_7: {
        feedback: { type: Number },
        gif_start_frame_index: { type: Number },
        gif_end_frame_index: { type: Number },
        confidence: { type: Number }
      }
    },
    algover: { type: String }
  },
  { timestamps: true,collection: 'recordshistory' }
);






module.exports = mongoose.model('recordshistory', recordsSchema);


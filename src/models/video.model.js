import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //Cloudnary URL
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String, // Cloudnary URl
      required: true
    },
    duration: {
      type: Number, //From Cloudnary
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

videoSchema.plugin(mongooseAggregatePaginate  )

export const Video = mongoose.model("Video", videoSchema);
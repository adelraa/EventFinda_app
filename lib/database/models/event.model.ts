import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  description?: string;
  title: string;
  location?: string;
  createdAt?: Date;
  startDateTime: Date;
  EndDateTime: Date;
  price?: number;
  isFree?: boolean;
  url?: string;
  category?: { _id: string; name: string };
  imageUrl?: string;
  organizer?: { _id: string; firstName: string; lastName: string };
}

const eventSchema = new Schema({
  description: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  startDateTime: {
    type: Date,
    required: false,
  },
  EndDateTime: {
    type: Date,
    required: false,
  },
  price: {
    type: Number,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  imageUrl: {
    type: String,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = models.Event || model("Event", eventSchema);

export default Event;

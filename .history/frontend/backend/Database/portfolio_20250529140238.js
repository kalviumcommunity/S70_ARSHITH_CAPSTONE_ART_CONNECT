import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Portfolio', PortfolioSchema);

import mongoose from 'mongoose';

// 1. User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['artist', 'client', 'admin'], default: 'artist' },
  bio: String,
  profileImage: String,
  socialLinks: {
    instagram: String,
    linkedin: String,
    portfolio: String,
  },
  artCategories: [String],
  twoFactorEnabled: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

// 2. Portfolio Item Schema
const portfolioItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  mediaUrl: String,
  mediaType: { type: String, enum: ['image', 'video'] },
  tags: [String],
}, { timestamps: true });

// 3. Job Schema
const jobSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  budget: Number,
  deadline: Date,
  status: { type: String, enum: ['open', 'in_progress', 'completed', 'cancelled'], default: 'open' },
}, { timestamps: true });

// 4. Application Schema
const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  portfolioLinks: [String],
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
}, { timestamps: true });

// 5. Collaboration Request Schema
const collaborationRequestSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
}, { timestamps: true });

// 6. Message Schema
const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

// 7. Forum Post Schema
const forumPostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  tags: [String],
}, { timestamps: true });

// 8. Comment Schema
const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'ForumPost' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
}, { timestamps: true });

// 9. Review Schema
const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });

// 10. Transaction Schema
const transactionSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  paymentMethod: { type: String, enum: ['Stripe', 'PayPal'] },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
}, { timestamps: true });

// Exporting Models
export const User = mongoose.model('User', userSchema);
export const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);
export const Job = mongoose.model('Job', jobSchema);
export const Application = mongoose.model('Application', applicationSchema);
export const CollaborationRequest = mongoose.model('CollaborationRequest', collaborationRequestSchema);
export const Message = mongoose.model('Message', messageSchema);
export const ForumPost = mongoose.model('ForumPost', forumPostSchema);
export const Comment = mongoose.model('Comment', commentSchema);
export const Review = mongoose.model('Review', reviewSchema);
export const Transaction = mongoose.model('Transaction', transactionSchema);

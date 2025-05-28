{
  _id,
  name: String,
  email: String,
  passwordHash: String,
  role: { type: String, enum: ['artist', 'client', 'admin'] },
  bio: String,
  profileImage: String,
  socialLinks: {
    instagram: String,
    linkedin: String,
    portfolio: String,
  },
  artCategories: [String],
  twoFactorEnabled: Boolean,
  isVerified: Boolean,
  createdAt,
  updatedAt
}

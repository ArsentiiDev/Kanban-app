import mongoose from 'mongoose';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI as string);
}

export default dbConnect;
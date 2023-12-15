import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    mongoose.connection.on('connected', () => {
      console.log('Connected to DB.');
    });
  } catch (error) {
    console.log('Failed to connect to DB', error);
  }
}

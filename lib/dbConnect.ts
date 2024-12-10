import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/vrv-saurabh');
  } catch (error) {
    throw new Error('Connection Failed!');
  }
};

export default dbConnect;

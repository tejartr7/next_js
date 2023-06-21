import mangoose from 'mongoose';


let isConnected = false;

export const connectToDatabase = async () => {
    mangoose.set('strictQuery', true);
    if (isConnected) {
        console.log('already connected');
        return;
    }
    else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            isConnected = true;

            console.log('MongoDB connected')
        } catch (error) {
            console.log(error);
        }
    }
}
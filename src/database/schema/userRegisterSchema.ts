// import mongoose, { Schema, Document } from 'mongoose';

// export interface IUser extends Document {
//   username: string;
//   password: string;
// }


// const userSchema: Schema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// export default mongoose.model<IUser>('User', userSchema);
import mongoose, { Schema, Document } from 'mongoose';

// Define the Role schema
const roleSchema: Schema = new Schema({
  _id:{type:String,default:undefined},
  rid: { type: String, required: true },      // Role Id
  rname:  { type: String, required: true },    // Role name
});

export interface IRole extends Document {
  rid: string;
  rname: string;
}

// Define the User schema
export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  roles: IRole[];
  createdAt: Date; // Renamed to createdAt
  updatedAt: Date; // Renamed to updatedAt
}

const userSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    roles: [roleSchema],
  },
  {
    timestamps: true, // Enable timestamps for createdAt and updatedAt
  }
);

export default mongoose.model<IUser>('User', userSchema);



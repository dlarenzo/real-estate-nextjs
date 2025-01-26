import User from "../models/user.model.js";
import { connect } from "../mongodb/mongoose.js";

export const createOrUpdateUser = async (
  // Information we want to get from Clerk
  id,
  first_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          profilePicture: image_url,
          email: email_addresses[0].email_address,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error: Could not create or update user:", error);
  }
};

// GO BACK AT 1:02:00 BACKWARDS IN THE VIDEO TO UNDERSTAND WHY THEY CHOSE WHAT THEY CHOSE

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error: Could not delete user:", error);
  }
};

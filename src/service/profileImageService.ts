import { UpdateProfileQuery } from "../query/profileImageQuery";

export const UpdateProfileService = async (id: number, image: string) => {
  try {
    const res = await UpdateProfileQuery(id, image);
    return res;
  } catch (err) {
    throw err;
  }
};

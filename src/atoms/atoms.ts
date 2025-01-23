import { atomWithStorage } from "jotai/utils";
import { IUserState } from "@/types";

export const userAtom = atomWithStorage<IUserState | null>("user", null);

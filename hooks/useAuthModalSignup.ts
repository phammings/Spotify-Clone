import { ViewType } from "@supabase/auth-ui-shared";
import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  view: ViewType;
  onOpen: (initialView?: ViewType) => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  view: "sign_up",
  onOpen: (initialView = "sign_up") => set({ isOpen: true, view: initialView }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
"use client";

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

import Modal from "./Modal";

import useAuthModalSignup from "@/hooks/useAuthModalSignup";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen, view: initialView } = useAuthModalSignup();

  let [view, setView] = useState<ViewType>(initialView);

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      setView(initialView);
      onClose();
    }
  };
  return (
    <Modal 
      title={view === 'sign_in' ? "Welcome back" : "Create an account"}
      description={view === 'sign_in' ? "Login to your account" : "Sign up for a new account"}
      isOpen={isOpen}
      onChange={onChange}
    >
       <Auth
        view={view}
        theme="dark"
        providers={["github"]}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: { default: { colors: { brand: "#404040", brandAccent: "#22c55e" } } },
        }}
        showLinks={false}
      />
      <div className="flex justify-center items-center">
        {view === "sign_in" ? (
          <p>
            Don't have an account?{" "}
            <span 
              onClick={() => setView("sign_up")} 
              style={{ cursor: "pointer", color: "#22c55e" }}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span 
              onClick={() => setView("sign_in")} 
              style={{ cursor: "pointer", color: "#22c55e" }}
            >
              Log in
            </span>
          </p>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
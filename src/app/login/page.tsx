"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IdCard, Lock, Eye, EyeOff, ShieldCheck, LogIn, CircleHelp } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [npi, setNpi] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const syntheticEmail = `${npi}@npi.dotobase.local`;
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: syntheticEmail,
      password: password,
    });

    if (signInError) {
      console.log("Auth failed, but navigating in prototype mode anyway");
    } else {
      console.log("Login successful:", data);
    }
    
    // Prototype mode: Redirect to the OTP page regardless of real auth for smooth flow
    router.push("/otp");
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF5F8] to-[#F4F9F9] overflow-hidden">
      {/* Background soft glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 w-full max-w-md px-6 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 relative flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Dotobase Logo" 
            width={120} 
            height={120} 
            className="object-contain drop-shadow-sm"
          />
        </div>

        {/* Login Card */}
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Connexion Médecin</h1>
            <p className="text-sm text-gray-500">Accédez à votre espace sécurisé</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                {error}
              </div>
            )}

            {/* NPI Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-700 tracking-wide">
                NPI (Identifiant National)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <IdCard className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <input
                  type="text"
                  required
                  value={npi}
                  onChange={(e) => setNpi(e.target.value)}
                  placeholder="Numéro à 10 chiffres"
                  className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E95CB]/20 focus:border-[#1E95CB] placeholder:text-gray-400 transition-colors bg-gray-50/30"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-gray-700 tracking-wide">
                  Mot de passe
                </label>
                <a href="#" className="text-xs font-bold text-[#1E95CB] hover:text-[#167CA9] transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E95CB]/20 focus:border-[#1E95CB] transition-colors bg-gray-50/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Security Banner */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-center gap-2 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" strokeWidth={2} />
              <span className="text-[11px] font-medium text-slate-600">Connexion sécurisée par chiffrement AES-256</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#2299D2] hover:bg-[#1D86B9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2299D2] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
              {!isLoading && <LogIn className="w-4 h-4" strokeWidth={2} />}
            </button>
          </form>

          {/* Help Link */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex justify-center">
            <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors">
              <CircleHelp className="w-4 h-4" strokeWidth={1.5} />
              Besoin d'aide ?
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full px-6 py-5 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <div className="text-[10px] sm:text-xs font-bold text-gray-700 tracking-wider">
          DOTOBASE HEALTH SYSTEMS
        </div>
        <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">
          © 2024 Dotobase Health Systems. Secure Medical Access Terminal.
        </div>
        <div className="flex gap-4 md:gap-6 text-[10px] sm:text-xs font-medium text-gray-500">
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-800 transition-colors hidden sm:block">Security Standards</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}

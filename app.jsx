import React, { useState, useEffect } from 'react';
import { 
  Menu
} from 'lucide-react'; 

import { auth } from './config/firebase'; 
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

import RecipeScreen from './components/RecipeScreen';
import HomeScreen from './components/HomeScreen';
import SideMenu from './components/SideMenu';

export default function App() {
    const [view, setView] = useState('home');
    const [activeTheme, setActiveTheme] = useState(null);
    const [medium, setMedium] = useState('watercolor');
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // --- AUTH LOGIC ---
    useEffect(() => {
        if (auth) {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => unsubscribe();
        }
    }, []);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login Failed", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsMenuOpen(false);
        } catch (error) {
            console.error("Logout Failed", error);
        }
    };

    const handleOpenTheme = (theme) => {
        setActiveTheme(theme);
        setView('recipe');
    };

    const handleBackToHome = () => {
        setView('home');
        setActiveTheme(null);
    };

    return (
        <div className="w-full h-screen bg-[#F2F2F7] text-stone-800 font-sans overflow-hidden flex justify-center">
            
            <div className="w-full h-full flex flex-col relative bg-white shadow-2xl overflow-hidden sm:max-w-md sm:mx-auto sm:rounded-[32px] sm:my-8 sm:h-[90vh] md:max-w-5xl md:h-[92vh] md:rounded-[40px] md:my-6 transition-all duration-500 ease-out">
                
                {/* Header */}
                <header className="relative px-5 py-2 flex items-center z-30 bg-white/95 backdrop-blur-md sticky top-0 md:px-10 md:py-4 shadow-sm border-b border-stone-50">
                    <h1 onClick={handleBackToHome} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-xl md:text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity">pigment.</h1>
                    <button onClick={() => setIsMenuOpen(true)} className="ml-auto p-1 -mr-1 rounded-full hover:bg-stone-50 transition-colors">
                        <Menu className="w-5 h-5 text-stone-800" />
                    </button>
                </header>

                <SideMenu 
                    isOpen={isMenuOpen} 
                    onClose={() => setIsMenuOpen(false)} 
                    user={user}
                    onLogin={handleLogin}
                    onLogout={handleLogout}
                    onHome={() => { setIsMenuOpen(false); handleBackToHome(); }}
                />

                <div className="flex-1 relative overflow-hidden">
                    {view === 'home' ? (
                        <HomeScreen onOpenTheme={handleOpenTheme} />
                    ) : (
                        <RecipeScreen 
                            theme={activeTheme} 
                            medium={medium} 
                            setMedium={setMedium} 
                            onBack={handleBackToHome} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

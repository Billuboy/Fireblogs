import { useState, useContext, createContext, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { auth, firestore } from '../firebase/baseInit';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        getDoc(doc(firestore, 'users', user.uid)).then(res => {
          if (res.exists()) {
            setUser({
              displayName: res.data().name,
              email: res.data().email,
              photoURL: res.data().avatar,
              uid: res.id,
            });
          } else setNewUser(user);
        });
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = () =>
    signInWithPopup(auth, provider).catch(err =>
      console.log('some error occurred')
    );

  const logout = () =>
    signOut(auth)
      .then(() => setUser(null))
      .catch(err => console.log(err));

  const value = {
    login,
    logout,
    user,
    newUser,
    setNewUser,
    setUser,
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

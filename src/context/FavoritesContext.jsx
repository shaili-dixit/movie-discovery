import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    function addFavorite(movie) {

        const exists = favorites.some(item => item.id === movie.id);

        if (!exists) {
            setFavorites([...favorites, movie]);
        }

    }

    function removeFavorite(id) {
        setFavorites(favorites.filter(movie => movie.id !== id));
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );

}
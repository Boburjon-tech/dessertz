import { useEffect, useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initalState = () => {
    try {
        const localData = localStorage.getItem("desserts");
        return localData ? JSON.parse(localData) : { cart: [], totalPrice: 0, totalAmount: 0 };
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return { cart: [], totalPrice: 0, totalAmount: 0 };
    }
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, payload],
            };

        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map((d) =>
                    d.id === payload ? { ...d, amount: d.amount + 1 } : d
                ),
            };

        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map((d) =>
                    d.id === payload ? { ...d, amount: d.amount - 1 } : d
                ),
            };

        case "DELETE":
            return {
                ...state,
                cart: state.cart.filter((d) => d.id !== payload),
            };

        case "CALCULATE_TOTAL":
            let totalAmount = 0;
            let totalPrice = 0;
            state.cart.forEach((item) => {
                totalAmount += item.amount;
                totalPrice += item.price * item.amount;
            });

            return { ...state, totalAmount, totalPrice };

        default:
            return state;
    }
};

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {}, initalState);

    useEffect(() => {
        dispatch({ type: "CALCULATE_TOTAL" });
    }, [state.cart]);

    useEffect(() => {
        localStorage.setItem("desserts", JSON.stringify(state));
    }, [state]);

    return <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>;
};

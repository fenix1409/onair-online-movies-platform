import { createContext, useState } from "react";
import React from "react";

export const Context = createContext()

export const ActionContext = ({ children }) => {
    const [likedList, setLikedList] = useState([])
    const [saveList, setSaveList] = useState([])

    return (
        <Context.Provider value={{ likedList, setLikedList, saveList, setSaveList }}>{children}</Context.Provider>
    )
}
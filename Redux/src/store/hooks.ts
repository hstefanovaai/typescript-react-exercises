import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

// useSelector - to get data from the store

// General setup for Redux when we have React with Typescript
type DispatchFunction = () => AppDispatch;

// original hook - useDispatch but with extra type information
export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelect: TypedUseSelectorHook<RootState> = useSelector; // it needs the type that describes the data in our store

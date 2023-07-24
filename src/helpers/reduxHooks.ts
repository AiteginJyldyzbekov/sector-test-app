import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "store/index.";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

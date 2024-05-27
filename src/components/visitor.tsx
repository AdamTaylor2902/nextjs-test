"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { updatePath } from "@/redux/features/location-slice";
const Visitor = ({ path }: { path: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(updatePath(path));
  }, [dispatch, path]);
  return <></>;
};

export default Visitor;

import { useCallback, useEffect, useState } from "react";

export const useAsync = (asyncFn: () => Promise<any>, immediate: boolean) => {
  const [state, setState] = useState({
    error: null,
    value: null,
    status: "idle",
  });

  const refetch = useCallback(async () => {
    setState({
      error: null,
      value: null,
      status: "pending",
    });
    return asyncFn()
      .then((response) => {
        setState({
          error: null,
          value: response,
          status: "success",
        });
      })
      .catch((err) => {
        setState({
          error: err,
          value: null,
          status: "fail",
        });
      });
  }, [asyncFn]);

  useEffect(() => {
    if (immediate) {
      refetch();
    }
  }, [immediate]);

  return { ...state, refetch };
};

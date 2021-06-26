import { forwardRef, useCallback, useMemo } from "react";
import { animateScroll, Events } from "react-scroll";
import { usePagination } from "../func/async";
import { fastMemo } from "../func";
import ListView from "./ListView.jsx";
import Loader from "./Loader.jsx";
import { Button } from "@windmill/react-ui";

const Inifinite = fastMemo(
  forwardRef(
    (
      {
        request,
        onSuccess,
        setData,
        params,
        name,
        RenderItem,
        inverted,
        reducer,
        style,
        ...rest
      },
      ref
    ) => {
      const {
        data = [],
        loaded,
        loading,
        isLoading,
        next,
        refresh,
        setState,
        getState,
        cleanup,
        pagination,
      } = usePagination(
        {
          request,
          setData,
          params,
          name,
          reducer,
          onSuccess,
          ...rest,
        },
        [params]
      );

      const _style = useMemo(() => ({ transform: inverted && "scaleY(-1)" }), [
        inverted,
      ]);

      const _RenderItem = useCallback(
        ({ item }) => <RenderItem item={item} style={_style} />,
        [_style, RenderItem]
      );

      const RenderFooter = useCallback(
        () => (
          <>
            {loading ? (
              <Loader />
            ) : (
              pagination?.last_page > pagination?.current_page && (
                <Button
                  style={{
                    transform: inverted && "scaleY(-1)",
                  }}
                  onClick={() => next()}
                >
                  load more
                </Button>
              )
            )}
          </>
        ),
        [loading, inverted, pagination?.last_page, pagination?.current_page]
      );

      if (ref) {
        if (!ref.current) ref.current = {};
        Object.assign(ref.current, { setState, getState });
      }

      return (
        <ListView
          data={data}
          loading={isLoading}
          inverted={inverted}
          RenderFooter={RenderFooter}
          RenderItem={_RenderItem}
          ref={ref}
        />
      );
    }
  )
);

export default Inifinite;

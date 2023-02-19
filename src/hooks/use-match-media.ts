import { BREAK_POINTS } from "../constants";
import { useEffect, useMemo, useState } from "react";
import { runningInBrowser } from "../constants";

const hoverQuery = "(any-hover: hover)";
const monitorQuery = "(max-width:1439px)";
const pcQuery = "(max-width:1024px)";
const spQuery = "(max-width:599px)";
const tabletQuery = "(max-width:768px)";
const orientationQuery = "(orientation: portrait)";

export const useMatchMedia = () => {
  const availableMatchMediaAddEventListener =
    runningInBrowser && typeof window.matchMedia("all").addEventListener !== "undefined";
  const defaultWindowWidth = useMemo(() => (runningInBrowser ? window.innerWidth : 0), [runningInBrowser]);
  const isPcSize = useMemo(() => defaultWindowWidth >= BREAK_POINTS.pc, [defaultWindowWidth]);
  const isTabletSize = useMemo(
    () => BREAK_POINTS.tablet <= defaultWindowWidth && defaultWindowWidth < BREAK_POINTS.pc,
    [defaultWindowWidth]
  );
  const isSpSize = useMemo(() => defaultWindowWidth <= BREAK_POINTS.sp, [defaultWindowWidth]);

  const [mediaType, setMediaType] = useState({
    isSpSize,
    isTabletSize,
    isPcSize,
  });

  const onChangeMediaByOrientation = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({ ...prev, isPortrait: event.matches }));
  };

  const onChangeMediaByDirection = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({ ...prev, isVertical: event.matches }));
  };

  const onChangeMediaByMonitorWidth = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({
      ...prev,
      isMonitorSize: !event.matches,
    }));
  };

  const onChangeMediaByPcWidth = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({
      ...prev,
      isPcSize: !event.matches,
      isTabletSize: event.matches,
    }));
  };

  const onChangeMediaBySpWidth = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({
      ...prev,
      isTabletSize: !event.matches,
      isSpSize: event.matches,
    }));
  };

  const onChangeMediaByHover = (event: MediaQueryListEvent) => {
    setMediaType((prev) => ({ ...prev, availableHover: event.matches }));
  };

  useEffect(() => {
    const monitorMediaQueryList = window.matchMedia(monitorQuery);
    const pcMediaQueryList = window.matchMedia(pcQuery);
    const spMediaQueryList = window.matchMedia(spQuery);
    const hoverMediaQueryList = window.matchMedia(hoverQuery);
    const tabletMediaQueryList = window.matchMedia(tabletQuery);
    const orientationMediaQueryList = window.matchMedia(orientationQuery);

    if (availableMatchMediaAddEventListener) {
      monitorMediaQueryList.addEventListener("change", onChangeMediaByMonitorWidth, {
        passive: true,
      });
      pcMediaQueryList.addEventListener("change", onChangeMediaByPcWidth, {
        passive: true,
      });
      spMediaQueryList.addEventListener("change", onChangeMediaBySpWidth, {
        passive: true,
      });
      hoverMediaQueryList.addEventListener("change", onChangeMediaByHover, {
        passive: true,
      });
      tabletMediaQueryList.addEventListener("change", onChangeMediaByDirection, {
        passive: true,
      });
      orientationMediaQueryList.addEventListener("change", onChangeMediaByOrientation, { passive: true });
    } else {
      monitorMediaQueryList.addListener(onChangeMediaByMonitorWidth);
      pcMediaQueryList.addListener(onChangeMediaByPcWidth);
      spMediaQueryList.addListener(onChangeMediaBySpWidth);
      hoverMediaQueryList.addListener(onChangeMediaByHover);
      tabletMediaQueryList.addListener(onChangeMediaByDirection);
      orientationMediaQueryList.addListener(onChangeMediaByOrientation);
    }

    return () => {
      if (availableMatchMediaAddEventListener) {
        monitorMediaQueryList.removeEventListener("change", onChangeMediaByMonitorWidth);
        pcMediaQueryList.removeEventListener("change", onChangeMediaByPcWidth);
        spMediaQueryList.removeEventListener("change", onChangeMediaBySpWidth);
        hoverMediaQueryList.removeEventListener("change", onChangeMediaByHover);
        tabletMediaQueryList.removeEventListener("change", onChangeMediaByHover);
        orientationMediaQueryList.removeEventListener("change", onChangeMediaByOrientation);
      } else {
        monitorMediaQueryList.removeListener(onChangeMediaByMonitorWidth);
        pcMediaQueryList.removeListener(onChangeMediaByPcWidth);
        spMediaQueryList.removeListener(onChangeMediaBySpWidth);
        hoverMediaQueryList.removeListener(onChangeMediaByHover);
        tabletMediaQueryList.removeListener(onChangeMediaByDirection);
        orientationMediaQueryList.removeListener(onChangeMediaByOrientation);
      }
    };
  }, []);

  return mediaType;
};

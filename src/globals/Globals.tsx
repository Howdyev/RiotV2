let isMobile = false;
if (typeof window !== "undefined") {
  if (window.innerWidth < 767) {
    isMobile = true;
  }
}

export const gIsMobile = isMobile
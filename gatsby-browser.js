export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.setTimeout(() => {
    window.scrollTo({
      top: 0,
    });
  }, 200);
  return false;
};

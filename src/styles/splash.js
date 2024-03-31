export const splashStyles = {
  splashTitleContainerDark: {
    width: "300px",
    padding: "var(--space-sm)", // Mobile Styles
    '@media screen and (min-width: 600px)': {
      padding: "var(--space-md)",
    },
    '@media screen and (min-width: 768px)': {
      padding: "var(--space-lg)",
    },
  },
  splashDescriptionDark: {
    color: "var(--text-main-deemphasize)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "28px",
    marginLeft: "var(--space-md)",
    '@media screen and (min-width: 600px)': {
      lineHeight: "30px",
      marginLeft: "var(--space-lg)",
      paddingTop: "var(--space-sm)",
    },
  },
  splashTitleDark: {
    color: "var(--text-main)",
    fontSize: "var(--font-size-huge)",
    fontWeight: "530",
    letterSpacing: "2px",
    lineHeight: "59px",
  },
  splashDescriptionContainerDark: {
    backgroundColor: "rgba(255, 166, 0, 0.111)",
    height: "300px",
    '@media screen and (min-width: 600px)': {
      width: "350px",
      marginLeft: "var(--space-xl)",
    },
    '@media screen and (min-width: 768px)': {
      width: "400px",
      marginTop: "var(--space-lg)",
    },
    '@media screen and (min-width: 1024px)': {
      marginTop: "var(--space-xl)",
      marginLeft: "var(--space-xxl)",
    },
    '@media screen and (min-width: 1280px)': {
      marginTop: "var(--space-xxl)",
      marginLeft: "var(--space-xxl)",
    },
  },
};

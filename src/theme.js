import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const lightPaletteText = {
  primary: '#01263C',
  secondary: '#596979',
  disabled: '#596979',
};

export const darkPaletteText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(148, 163, 184)',
  disabled: 'rgb(156, 163, 175)',
};

const customTheme = {
  typography: {
    fontFamily: ['Poppins', 'Inter var', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: 10,
    fontSize: 16,
    body1: {
      fontSize: '1.6rem',
    },
    body2: {
      fontSize: '1.4rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.6rem',
    }
  },
  components: {

    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary'
      },
      styleOverrides: {
        contained: {
          background: 'linear-gradient(261.83deg, #D82129 0%, #F36D27 100%)',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: ({
          transform: 'translate(14px, -9px) scale(0.85)',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline} > legend`]: {
            fontSize: 13,
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100%',
          width: '100%',
          paddingLeft: '12px',
          paddingRight: '12px',
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '36px',
          height: '36px',
          background: 'rgba(37, 123, 179, 0.15)'
        },
        rounded: {
          borderRadius: '8px'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        padding: {
          padding: '12px'
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          margin: 0
        },
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0
        },
        primary: {
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        fontSize: '16px'
      }
    },
  }
}

// A custom theme for this app
const theme = createTheme({
    palette: {
      mode: 'light',
      divider: '#e2e8f0',
      text: lightPaletteText,
      common: {
        black: 'rgb(17, 24, 39)',
        white: 'rgb(255, 255, 255)',
      },
      primary: {
        light: '#ffcdd2',
        main: '#EB6017',
        dark: '#EE2623',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#50a6de',
        main: '#257BB2',
        dark: '#003D62',
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#f1f5f9',
      },
      error: {
        light: '#ffcdd2',
        main: '#f44336',
        dark: '#b71c1c',
      },
    },
    status: {
      danger: 'orange',
    },
    ...customTheme
});

export default theme;

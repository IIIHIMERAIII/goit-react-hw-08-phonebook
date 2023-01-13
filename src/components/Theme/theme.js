import { extendTheme } from '@chakra-ui/react';

const colors = {
    MainBgColor: '#ffa500',
    BtnBgColor: 'black',
    TextColor: 'black',
    HoverTextColor: 'white',
    HoverBtnColor: 'white'
};

const styles = {
    global: props => ({
        body: {
            bg: 'MainBgColor',
        },
        a: {
            _hover:{
                color: 'HoverTextColor',
                letterSpacing: '0.7em',
                transitionDuration: '1.3s',
            },
        }
    }),
};

const components = {
        a: {
        baseStyle: props => ({
            _hover: {
                color: 'HoverTextColor'
            },
        }),
    },
    FormLabel: {
        baseStyle: props => ({
            m: '10px 0 10px 0',
            _hover: {
                color: 'HoverTextColor'
            },
        }),
    },
    Input: {
        baseStyle: props => ({
            mt:'10px',
        }),
    },
    Button: {
        baseStyle: props => ({
            bg:'BtnBgColor',
            color: 'white',
            _hover: {
                bg: 'HoverBtnColor',
                color: 'TextColor',
            }
        }),
    },
};





export const theme = extendTheme({ colors, styles, components });


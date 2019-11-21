/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';

import Header from './header';
import '../style/layout.css';
import {createMuiTheme} from '@material-ui/core';
import {connect} from 'react-redux';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2980b9'
        },
        secondary: {
            main: '#c0392b'
        },
    },
});

const appThemeOptions = {
    LIGHT: {
        palette: {
            type: 'light',
            primary: {
                main: '#2980b9'
            },
            secondary: {
                main: '#c0392b'
            },
        },
    },
    DARK: {
        palette: {
            type: 'dark',
            primary: {
                main: '#2c3e50',
            },
            secondary: {
                main: '#8e44ad',
            },
        },
    }
};

const Layout = ({children, storeTheme}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
    `);

    const theme = storeTheme === 'DARK' ? appThemeOptions.DARK : appThemeOptions.LIGHT;

    return (
        <ThemeProvider theme={createMuiTheme(theme)}>

            <Header siteTitle={data.site.siteMetadata.title}/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>
                    {children}
                </main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
    return {
        storeTheme: state.app.theme,
    };
};

export default connect(mapStateToProps)(Layout);

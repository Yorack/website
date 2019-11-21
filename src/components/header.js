// import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Menu from './menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import InvertColors from '@material-ui/icons/InvertColors';
import {bindActionCreators} from 'redux';
import {actions} from '../redux/actions';
import {connect} from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

const Header = ({siteTitle, theme, actions}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        actions.toggleTheme();
    };

    return (
        <AppBar
            position="fixed"
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    edge="start"
                    // className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Welcome ! My theme is: {theme}
                </Typography>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleTheme}
                    edge="end"
                    // className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <InvertColors />
                </IconButton>
            </Toolbar>

            <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
                Menu comming soon ! !!!!!!!!!!!
            </Drawer>
        </AppBar>
        // <header
        //     style={{
        //         background: `rebeccapurple`,
        //         marginBottom: `1.45rem`,
        //     }}
        // >
        //     <Menu />
        //     <div
        //         style={{
        //             margin: `0 auto`,
        //             maxWidth: 960,
        //             padding: `1.45rem 1.0875rem`,
        //         }}
        //     >
        //
        //         <h1 style={{margin: 0}}>
        //             <Link
        //                 to="/"
        //                 style={{
        //                     color: `white`,
        //                     textDecoration: `none`,
        //                 }}
        //             >
        //                 {siteTitle}
        //             </Link>
        //         </h1>
        //     </div>
        // </header>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.app.theme,
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

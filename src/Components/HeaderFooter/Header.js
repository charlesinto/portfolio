import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { IconButton } from "@material-ui/core";

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="wrapper" style={{ marginRight: '24px', marginTop: '24px' }}>
                <IconButton>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: '#fff', fontSize: '24px' }}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className="header-animation">
            <div className="circles">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="circle" style={{ '--i': i }}></div>
                ))}
            </div>
        </div>
    );
};

export default Header;
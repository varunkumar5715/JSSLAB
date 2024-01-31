// import React from 'react';

// const Labs = () => {
//     return (
//         <div>
//             <h1>Labs page</h1>
//         </div>
//     );
// };

// export default Labs;

import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';

const LabsPage = () => {
    return (
        <div>
             <h2>Select a Lab </h2>
            {/* <Header title="Labs Page" /> */}
            <main className="main-container">
                <aside className="side-menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/labs/cognition">Cognition</Link>
                            </li>
                            <li>
                                <Link to="/labs/vestibular">Vestibulae</Link>
                            </li>
                            <li>
                                <Link to="/labs/tinnitus">Tinnitus</Link>
                            </li>
                            <li>
                                <Link to="/labs/hearing">Hearing</Link>
                            </li>
                            <li>
                                <Link to="/labs/voice">Voice </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className="main-content">
                   
                    {/* You can add additional content for the LabsPage here */}
                </section>
            </main>
            {/* <Footer content="© 2024 React Labs Co." /> */}
        </div>
    );
};

export default LabsPage;

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PropTypes from 'prop-types';


const MainLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>

    );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
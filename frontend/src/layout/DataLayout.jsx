import PropTypes from 'prop-types';

const DataLayout = ({ children }) => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:min-w-[55%] gap-3">
            { children }
            </section>
        </main>

    );
};

DataLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataLayout;
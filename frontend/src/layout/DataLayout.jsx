import PropTypes from 'prop-types';

const DataLayout = ({ children }) => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col w-[95%] md:w-[85%] xl:w-[55%] gap-3 mb-8">
            { children }
            </section>
        </main>

    );
};

DataLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataLayout;
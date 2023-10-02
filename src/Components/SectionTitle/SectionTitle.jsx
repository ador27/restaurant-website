const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <p className="text-yellow-500">---{subHeading}---</p>
            <h3 className="text-4xl uppercase">{heading}</h3>

        </div>
    );
};

export default SectionTitle;
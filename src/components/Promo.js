function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.msg}</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;
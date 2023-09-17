import preloader from "../../../assets/images/loader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
        </div>
    );
};

export default Preloader;
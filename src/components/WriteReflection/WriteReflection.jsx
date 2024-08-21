import "./WriteReflection.scss";

function WriteReflection() {
    return (
        <div className="write">
            <h1 className="write__title">Write a reflection</h1>
            <div className="write__word-wrapper">
                <div className="write__word-date">
                    <p>word</p>
                    <p>date</p>
                </div>
                <div>
                    <p>type</p>
                    <p>phoenetic</p>
                </div>
                <p>definition</p>
                <p>origin</p>
                <p>use example</p>
                <p>fun fact: </p>
            </div>
            <form className="write__form">
                <textarea
                    className="write__form-input"
                    name=""
                    id=""
                ></textarea>
                <button>reset</button>
                <button>save</button>
            </form>
        </div>
    );
}

export default WriteReflection;

import Result from "./Components/Result";
import Summary from "./Components/Summary";

function App() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full w-full flex-col rounded-2xl bg-primary-white xs:h-3/4 xs:max-h-[700px] xs:w-2/4 xs:min-w-[800px] xs:max-w-[800px] xs:flex-row xs:shadow-xl">
                <Result />
                <Summary />
            </div>
        </div>
    );
}

export default App;

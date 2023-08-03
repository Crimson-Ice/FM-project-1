import Stat from "./Stat";

function Summary() {
    return (
        <div
            role="summary"
            className="flex h-full w-full flex-col p-8 xs:w-1/2 xs:px-10 xs:py-14"
        >
            <h3 className="text-3xl font-bold">Summary</h3>
            <div className="flex h-[300px] flex-col justify-evenly xs:h-full">
                <Stat
                    logo="icon-reaction"
                    bgColor="hsla(0, 100%, 67%, 10%)"
                    color="hsl(0, 100%, 67%)"
                    statName="Reaction"
                    note="80"
                />
                <Stat
                    logo="icon-memory"
                    bgColor="hsla(39, 100%, 56%, 10%)"
                    color="hsl(39, 100%, 56%)"
                    statName="Memory"
                    note="91"
                />
                <Stat
                    logo="icon-verbal"
                    bgColor="hsla(166, 100%, 37%, 10%)"
                    color="hsl(166, 100%, 37%)"
                    statName="Verbal"
                    note="61"
                />
                <Stat
                    logo="icon-visual"
                    bgColor="hsla(234, 85%, 45%, 10%)"
                    color="hsl(234, 85%, 45%)"
                    statName="Visual"
                    note="72"
                />
            </div>
            <button className="h-16 w-full rounded-3xl bg-secondary-Dark-gray-blue text-lg text-primary-white">
                Continue
            </button>
        </div>
    );
}

export default Summary;

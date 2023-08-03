function Result() {
    return (
        <div
            role="result"
            className="flex flex-col  items-center justify-around rounded-b-2xl bg-gradient-to-br from-primary-Light-slate-blue to-primary-Light-roya-blue p-5 xs:h-full xs:w-1/2 xs:rounded-2xl xs:px-8 xs:py-9"
        >
            <h3 className="py-5 text-xl font-bold text-primary-Light-lavender xs:py-0 xs:text-3xl">
                Your Result
            </h3>
            <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-b from-primary-Violet-blue to-primary-Persian-blue">
                <h1 className="text-6xl font-bold text-primary-white ">76</h1>
                <p className="text-lg font-bold text-primary-Light-lavender">
                    of 100
                </p>
            </div>
            <h2 className="py-5 text-3xl font-bold text-primary-white xs:py-0">
                Great
            </h2>
            <p className="px-12 text-center text-primary-Light-lavender">
                You scored highter than 65% of the people who have taken these
                tests.
            </p>
        </div>
    );
}

export default Result;

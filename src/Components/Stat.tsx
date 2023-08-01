interface StatInterface {
    logo: string;
    bgColor: string;
    color: string;
    statName: string;
    note: string;
}

function Stat({ logo, bgColor, color, statName, note }: StatInterface) {
    return (
        <div
            className={`flex flex-row justify-between rounded-lg p-4`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="flex flex-row">
                <img className="px-2" src={`/${logo}.svg`} alt={logo} />
                <h3 style={{ color: color }} className="font-bold">
                    {statName}
                </h3>
            </div>
            <h3 className="pr-2">
                <span className="font-bold">{note}</span>{" "}
                <span className="font-bold text-primary-Dark-gray-blue/30">
                    / 100
                </span>
            </h3>
        </div>
    );
}

export default Stat;

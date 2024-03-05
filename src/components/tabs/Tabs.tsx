function Tab({ ...data }) {
    const { name } = data;
    return <div>{name}</div>;
}
export default function Tabs() {
    const tabData = [
        {
            id: 1,
            name: "Tab 1",
        },
        {
            id: 1,
            name: "Tab 1",
        },
    ];
    return (
        <div className=" min-w-screen w-full grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))]">
            {tabData.map((data) => (
                <Tab key={data.id} {...data} />
            ))}
        </div>
    );
}

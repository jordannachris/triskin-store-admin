const PageTitle = ({ titleText }: { titleText: string }) => {
    return (
        <div>
            <h1 className="text-center text-xl tracking-wide font-semibold uppercase text-fuchsia-800 my-8">
                {titleText}
            </h1>
        </div>
    );
};

export default PageTitle;
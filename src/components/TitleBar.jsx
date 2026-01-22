function TitleBar(props) {
    return (
        <header className="">
            <div className="mx-auto h-16 pt-4 gap-8 px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg">
                    {props.title}
                </h3>
            </div>
        </header>
    )
}

export default TitleBar
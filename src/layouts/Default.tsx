interface IBase {
    children: JSX.Element
}
function Default({ children }:IBase) {
    return (
        <div>
            <header>This is header</header>
            <body>
                {children}
            </body>
        </div>
    );
}

export default Default;

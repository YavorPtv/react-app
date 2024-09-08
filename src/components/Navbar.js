import NavItem from './NavItem'
function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <NavItem name="Home" link="#" />
                        <NavItem name="Features" link="#" />
                        <NavItem name="Pricing" link="#" />
                        <NavItem name="About Us" link="#" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
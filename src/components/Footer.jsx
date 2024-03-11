const Footer = () => {
    const curentYear = new Date().getFullYear()
    return (
        <footer class="bg-primary py-3">
            <div class="d-flex py-3 text-white text-center">
                <div class="col-sm-12 col-md-4">
                    ¡Gracias!
                </div>
                <div class="col-sm-12 col-md-8">
                    <b>JOEL DAVID GOMEZ ORTEGA</b> © <span id="yearSpan">{curentYear}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
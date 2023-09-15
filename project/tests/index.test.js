describe('Index', () => {
    it("It should download file", () => {
        document.body.innerHTML = `
            <div id="root">
                <button id="download" class="button button-transparent">
                    <span class="material-symbols-outlined">download</span>
                </button>
            </div>
        `;
        require("../js/index");
        let download = document.getElementById("download");
        download.click();

        expect(download.disabled).toBeTruthy();
    });

    it("It should download file validate load event", () => {
        expect(window.dispatchEvent(new CustomEvent("load"))).toBeTruthy();
    });
});

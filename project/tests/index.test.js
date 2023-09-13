describe('Index', () => {
    it("It should download file", () => {
        document.body.innerHTML = `
            <button id="download" class="button button-transparent">
                <span class="material-symbols-outlined">download</span>
            </button>
        `;
        require("../js/index");
        let download = document.getElementById("download");
        download.click();

        expect(download.disabled).toBeTruthy();
    });
});

const onClick = () => {
    let element = document.createElement("a");
    element.setAttribute("href", "./assets/myresume.pdf");
    element.setAttribute("download", "olivenbarcelon.pdf");

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    document.getElementById("download").disabled = true;
}

class CurriculumVitae {
    render = () => {
        return `
            <div class="container">
                <div class="row">
                    <div class="column-5">
                        <div class="row">
                            <div class="box">
                                <a target="_blank" href="https://ucarecdn.com/7aaf6872-6ce6-4acc-a462-33ef1802636e/">
                                    <img src="https://ucarecdn.com/7aaf6872-6ce6-4acc-a462-33ef1802636e/" alt="Profile Picture">
                                </a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="body">
                                    <div class="group">
                                        <button id="download" class="button-icon button-icon-transparent">
                                            <span class="material-symbols-outlined">download</span>
                                        </button>
                                    </div>

                                    <div class="group">
                                        <span class="material-symbols-outlined">person</span>

                                        <label for="person">Oliven C. Barcelon</label>
                                    </div>

                                    <div class="group">
                                        <span class="material-symbols-outlined">business_center</span>

                                        <label for="business-center">Back-End Software Engineer</label>
                                    </div>

                                    <div class="group">
                                        <span class="material-symbols-outlined">home</span>

                                        <label for="home">251 Pagkakaisa St., Bancaan, Naic, Cavite</label>
                                    </div>

                                    <div class="group">
                                        <span class="material-symbols-outlined">email</span>

                                        <label for="email">63906-920-8033</label>
                                    </div>

                                    <div class="group">
                                        <span class="material-symbols-outlined">call</span>

                                        <label for="call">olivenbarcelon@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">target</span>

                                        <label for="work-objective">Work Objective</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <p class="indent">To work on a company that will allow me to grow professionally and at the same time achievethe company's objective.</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">public</span>

                                        <label for="languages">Languages</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <div class="progress progress-100">
                                        <p class="progress-label">Filipino</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-75">
                                        <p class="progress-label">English</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="75">75%</progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">emergency</span>

                                        <label for="languages">Skills</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <div class="progress progress-100">
                                        <p class="progress-label">JavaScript</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">CSS</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">HTML</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">Laravel</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">PHP</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">Spring MVC/Webflux</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress progress-100">
                                        <p class="progress-label">Java</p>
                                        <div class="progress-bar">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column-7">
                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">school</span>

                                        <label for="school">Educational</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <dl>
                                        <dt>Cavite State University - Naic Campus</dt>
                                        <dd>Bucana, Naic, Cavite</dd>
                                        <dd>Bachelor of Science in Computer Science</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">2009 - 2014</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>Rosario National High School</dt>
                                        <dd>Rosario, Cavite</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">2001 - 2006</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>Bancaan Elementary School</dt>
                                        <dd>Bancaan, Naic, Cavite</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">1995 - 2001</label>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">work</span>

                                        <label for="work">Work Experiences</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <dl>
                                        <dt>Multisys Technologies Corporation</dt>
                                        <dd>Back-End Software Engineer</dd>
                                        <dd>Research and Development</dd>
                                        <dd>#14 Mt. Olives St., Multinational Village</dd>
                                        <dd>Moonwalk, Parañaque City, Philippines, 1708</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">September 2019 up to present</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>www.upwork.com (formerly oDesk)</dt>
                                        <dd>Android Developer and Java Developer</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">August 2016 - September 2019</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>Hocheng Philippines Corporation</dt>
                                        <dd>Web Developer</dd>
                                        <dd>Management Information System of Operation Division</dd>
                                        <dd>Dasmariñas, Cavite</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">March 2016 - August 2016</label>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">model_training</span>

                                        <label for="school">Trainings/Seminars</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <dl>
                                        <dt>Architecting on AWS</dt>
                                        <dd>Multisys Technologies Corporation - Manila Office</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">March 03, 2020 - March 05, 2020</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>Technical Essentials on AWS</dt>
                                        <dd>Multisys Technologies Corporation - Manila Office</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">March 02, 2020</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>The Future of IT in Mobile Application, Web and Game Development</dt>
                                        <dd>Lyceum of the Philippines - Cavite Campus</dd>
                                        <dd>Brgy. Manggahan, Gen. Trias, Cavite</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">August 30, 2013</label>
                                            </div>
                                        </dd>
                                    </dl>

                                    <hr />

                                    <dl>
                                        <dt>7th Cavite ICT Youth Convention</dt>
                                        <dd>SM Cinema Theater</dd>
                                        <dd>Bacoor City, Cavite</dd>
                                        <dd>
                                            <div class="group">
                                                <span class="material-symbols-outlined">calendar_month</span>

                                                <label for="year">January 25, 2013</label>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="box">
                                <div class="title">
                                    <div class="group">
                                        <span class="material-symbols-outlined">person</span>

                                        <label for="school">Personal</label>
                                    </div>
                                </div>

                                <div class="body">
                                    <div class="group">
                                        <label for="key">Date of Birth: </label>

                                        <label for="value">May 26, 1988</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Place of Birth: </label>

                                        <label for="value">Rosario, Cavite</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Height: </label>

                                        <label for="value">5'5”</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Weight: </label>

                                        <label for="value">113 lbs.</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Gender: </label>

                                        <label for="value">Male</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Civil Status: </label>

                                        <label for="value">Single</label>
                                    </div>

                                    <div class="group">
                                        <label for="key">Citizenship: </label>

                                        <label for="value">Filipino</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">Copyright &copy; 2023 Barcelon, Oliven C.</div>
        `;
    }
}

window.addEventListener("load", (e) => {
    if(e.detail === undefined || e.detail === null) return;

    let root = document.getElementById("root");
    let curriculumVitae = new CurriculumVitae();
    root.innerHTML = curriculumVitae.render();
    document.getElementById("download").addEventListener("click", onClick);
});

window.dispatchEvent(
    new CustomEvent("load", {
        detail: "Dispatch Event"
    })
);

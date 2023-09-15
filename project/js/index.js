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
                    <div class="column">
                        <div class="frame">
                            <div class="body">
                                <div class="gallery">
                                    <a target="_blank" href="https://ucarecdn.com/7aaf6872-6ce6-4acc-a462-33ef1802636e/">
                                        <img src="https://ucarecdn.com/7aaf6872-6ce6-4acc-a462-33ef1802636e/" alt="Profile Picture">
                                    </a>
                                    <div class="description">
                                        <div class="group">
                                            <button id="download" class="button button-transparent">
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
                
                                <hr />
                
                                <div class="card">
                                    <div class="group">
                                        <span class="material-symbols-outlined">target</span>
                
                                        <label for="work-objective">Work Objective</label>
                                    </div>
                
                                    <div class="card">
                                        <p>To work on a company that will allow me to grow professionally and at the same time achievethe company's objective.</p>
                                    </div>
                                </div>
                
                                <hr />
                
                                <div class="card">
                                    <div class="group">
                                        <span class="material-symbols-outlined">public</span>
                
                                        <label for="languages">Languages</label>
                                    </div>
                
                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">Filipino</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress-element progress-element--75">
                                        <p class="progress-label">English</p>
                                        <div class="progress-container">
                                            <progress max="100" value="75">75%</progress>
                                        </div>
                                    </div>
                                </div>

                                <hr >

                                <div class="card">
                                    <div class="group">
                                        <span class="material-symbols-outlined">emergency</span>
                
                                        <label for="languages">Skills</label>
                                    </div>
                
                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">JavaScript</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">Laravel</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">PHP</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">Spring MVC/Webflux</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>

                                    <div class="progress-element progress-element--100">
                                        <p class="progress-label">Java</p>
                                        <div class="progress-container">
                                            <progress max="100" value="100">100%</progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="frame">
                            <div class="title">
                                <div class="group">
                                    <span class="material-symbols-outlined">school</span>
            
                                    <label for="school">Educational</label>
                                </div>
                            </div>
            
                            <div class="body">
                                <div class="section">
                                    <div class="title">Cavite State University - Naic Campus</div>
            
                                    <div class="body">
                                        <label for="school">Bucana, Naic, Cavite</label>
            
                                        <label for="location">Bachelor of Science in Computer Science</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">2009 - 2014</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">Rosario National High School</div>
            
                                    <div class="body">
                                        <label for="location">Rosario, Cavite</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">2001 - 2006</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">Bancaan Elementary School</div>
            
                                    <div class="body">
                                        <label for="location">Bancaan, Naic, Cavite</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">1995 - 2001</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="frame">
                            <div class="title">
                                <div class="group">
                                    <span class="material-symbols-outlined">work</span>
            
                                    <label for="work">Work Experiences</label>
                                </div>
                            </div>
            
                            <div class="body">
                                <div class="section">
                                    <div class="title">Multisys Technologies Corporation</div>
            
                                    <div class="body">
                                        <label for="position">Back-End Software Engineer</label>

                                        <label for="department">Research and Development</label>
            
                                        <label for="location">#14 Mt. Olives St., Multinational Village</label>

                                        <label for="location">Moonwalk, Parañaque City, Philippines, 1708</label>
                                        
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">September 2019 up to present</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">www.upwork.com (formerly oDesk)</div>
            
                                    <div class="body">
                                        <label for="position">Android Developer and Java Developer</label>

                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">August 2016 - September 2019</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">Hocheng Philippines Corporation</div>
            
                                    <div class="body">
                                        <label for="position">Web Developer</label>

                                        <label for="department">Management Information System of Operation Division</label>
            
                                        <label for="location">Dasmariñas, Cavite</label>

                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">March 2016 - August 2016</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="frame">
                            <div class="title">
                                <div class="group">
                                    <span class="material-symbols-outlined">model_training</span>
            
                                    <label for="school">Trainings/Seminars</label>
                                </div>
                            </div>
            
                            <div class="body">
                                <div class="section">
                                    <div class="title">Technical Essentials on AWS</div>
            
                                    <div class="body">
                                        <label for="location">Multisys Technologies Corporation - Manila Office</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">March 02, 2020</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">Architecting on AWS</div>
            
                                    <div class="body">
                                        <label for="location">Multisys Technologies Corporation - Manila Office</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">March 03, 2020 - March 05, 2020</label>
                                        </div>
                                    </div>
                                </div>
            
                                <hr />
            
                                <div class="section">
                                    <div class="title">7th Cavite ICT Youth Convention</div>
            
                                    <div class="body">
                                        <label for="location">SM Cinema Theater</label>

                                        <label for="location">Bacoor City, Cavite</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">January 25, 2013</label>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div class="section">
                                    <div class="title">The Future of IT in Mobile Application, Web and Game Development</div>
            
                                    <div class="body">
                                        <label for="location">Lyceum of the Philippines - Cavite Campus</label>

                                        <label for="location">Brgy. Manggahan, Gen. Trias, Cavite</label>
            
                                        <div class="group">
                                            <span class="material-symbols-outlined">calendar_month</span>
                    
                                            <label for="year">August 30, 2013</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="frame">
                            <div class="title">
                                <div class="group">
                                    <span class="material-symbols-outlined">person</span>
            
                                    <label for="school">Personal</label>
                                </div>
                            </div>
            
                            <div class="body">
                                <div class="section">
                                    <div class="title">Date of Birth</div>
            
                                    <div class="body">
                                        <label for="location">May 26, 1988</label>
                                    </div>
                                </div>
            
                                <div class="section">
                                    <div class="title">Place of Birth</div>
            
                                    <div class="body">
                                        <label for="location">Rosario, Cavite</label>
                                    </div>
                                </div>

                                <div class="section">
                                    <div class="title">Height</div>
            
                                    <div class="body">
                                        <label for="location">5'5”</label>
                                    </div>
                                </div>

                                <div class="section">
                                    <div class="title">Weight</div>
            
                                    <div class="body">
                                        <label for="location">113 lbs.</label>
                                    </div>
                                </div>

                                <div class="section">
                                    <div class="title">Gender</div>
            
                                    <div class="body">
                                        <label for="location">Male</label>
                                    </div>
                                </div>

                                <div class="section">
                                    <div class="title">Civil Status</div>
            
                                    <div class="body">
                                        <label for="location">Single</label>
                                    </div>
                                </div>

                                <div class="section">
                                    <div class="title">Citizenship</div>
            
                                    <div class="body">
                                        <label for="location">Filipino</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">Copyright &copy; 2023 Barcelon, Oliven C.</div>
            </div>
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

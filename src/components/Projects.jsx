import { useState, useEffect } from "react";

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState("featured"); // 'featured' or 'github'
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [githubUsername, setGithubUsername] = useState("adedevs");
    const [searchQuery, setSearchQuery] = useState("");

    const fetchGithubRepos = async (user) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=12`);
            if (!res.ok) {
                throw new Error(`Could not load repos for "${user}" (Status: ${res.status})`);
            }
            const data = await res.json();
            setRepos(Array.isArray(data) ? data : []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === "github" && repos.length === 0) {
            fetchGithubRepos(githubUsername);
        }
    }, [activeTab, githubUsername, repos.length]);

    const handleUserSubmit = (e) => {
        e.preventDefault();
        if (githubUsername.trim()) {
            fetchGithubRepos(githubUsername.trim());
        }
    };

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
        <div className="projects">
            <main className="project-page">
                <div className="projects-intro">
                   <div className="proj-txt">
                   <h1>Projects I've Built</h1>
                   <p>This is a collection of some of my recent frontend and web-based projects, built with React, APIs, and a touch of curiosity.</p>
                   </div>
                   <div className="projects-toggle-group">
                       <button 
                         className={`toggle-btn ${activeTab === "featured" ? "active" : ""}`}
                         onClick={() => setActiveTab("featured")}
                       >
                         Featured Apps
                       </button>
                       <button 
                         className={`toggle-btn ${activeTab === "github" ? "active" : ""}`}
                         onClick={() => setActiveTab("github")}
                       >
                         Live GitHub Repos
                       </button>
                   </div>
                </div>

                {activeTab === "featured" ? (
                    <div className="projects-box">
                        <section className="project-card card-one">
                            <a href="https://thekazihub.vercel.app/" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://thekazihub.vercel.app/" target="_blank" rel="noreferrer">Kazi</a></h1>
                                <p>
                                    A premier artisan and professional services marketplace connecting customers with vetted local experts across neighborhoods with instant availability tracking, transparent pricing, dual-role dashboards, and real-time chat.
                                </p>
                            </div>
                        </section>
                        <section className="project-card card-two">
                            <a href="https://directrent.space" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://directrent.space" target="_blank" rel="noreferrer">DirectRent</a></h1>
                                <p>
                                    A verified digital rental marketplace connecting students and residents directly with landlords for scam-free renting — featuring verified student hostels, off-campus accommodations, upfront pricing, and zero agent stress or hidden fees.
                                </p>
                            </div>
                        </section>
                        <section className="project-card card-three">
                            <a href="https://maishaimport.vercel.app/" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://maishaimport.vercel.app/" target="_blank" rel="noreferrer">Maisha</a></h1>
                                <p>
                                    A premier private import-export fashion store in Nigeria offering curated collections of quality apparel, footwear, and accessories with seamless catalog exploration and sleek modern aesthetics.
                                </p>
                            </div>
                        </section>
                        <section className="project-card card-four">
                            <a href="https://brookebyade.vercel.app/" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://brookebyade.vercel.app/" target="_blank" rel="noreferrer">brooke</a></h1>
                                <p>
                                    A minimalist editorial fashion concept website with elegant typography, high-contrast aesthetics, and clean visual storytelling.
                                </p>
                            </div>
                        </section>
                        <section className="project-card card-five">
                            <a href="https://wordcounterbyade.vercel.app/" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://wordcounterbyade.vercel.app/" target="_blank" rel="noreferrer">word counter</a></h1>
                                <p>
                                    A practical real-time text analysis utility calculating word count, character statistics, keyword density, and reading duration.
                                </p>
                            </div>
                        </section>
                        <section className="project-card card-six">
                            <a href="https://dreamspacebyade.vercel.app/" target="_blank" rel="noreferrer" className="project-img"></a>
                            <div className="project-info">
                                <h1><a href="https://dreamspacebyade.vercel.app/" target="_blank" rel="noreferrer">dreamspace</a></h1>
                                <p>
                                    An atmospheric landing page experience with smooth scroll transitions, modern hero visuals, and responsive interactive layouts.
                                </p>
                            </div>
                        </section>
                    </div>
                ) : (
                    <div className="github-showcase">
                        <div className="github-controls">
                            <form onSubmit={handleUserSubmit} className="github-user-form">
                                <span className="github-icon-label"><ion-icon name="logo-github"></ion-icon></span>
                                <input 
                                  type="text" 
                                  value={githubUsername}
                                  onChange={(e) => setGithubUsername(e.target.value)}
                                  placeholder="GitHub username (e.g. adedevs)"
                                  className="github-input"
                                />
                                <button type="submit" className="github-fetch-btn">Fetch Repos</button>
                            </form>
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Filter repositories by name or language..."
                              className="github-filter-input"
                            />
                        </div>

                        {loading ? (
                            <div className="github-loading">
                                <div className="spinner"></div>
                                <p>Fetching live GitHub repositories for @{githubUsername}...</p>
                            </div>
                        ) : error ? (
                            <div className="github-error">
                                <p>{error}</p>
                                <button onClick={() => fetchGithubRepos(githubUsername)} className="github-retry-btn">Retry</button>
                            </div>
                        ) : (
                            <div className="github-repos-grid">
                                {filteredRepos.length === 0 ? (
                                    <div className="github-empty">No public repositories found matching your filter.</div>
                                ) : (
                                    filteredRepos.map((repo) => (
                                        <div key={repo.id} className="github-repo-card">
                                            <div className="repo-header">
                                                <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-title">
                                                    {repo.name}
                                                </a>
                                                <span className="repo-visibility">{repo.visibility || "public"}</span>
                                            </div>
                                            <p className="repo-desc">
                                                {repo.description || "No description provided."}
                                            </p>
                                            <div className="repo-footer">
                                                {repo.language && (
                                                    <span className="repo-lang-badge">
                                                        <span className="lang-dot"></span>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className="repo-stat">
                                                    ★ {repo.stargazers_count}
                                                </span>
                                                <span className="repo-stat">
                                                    ⑂ {repo.forks_count}
                                                </span>
                                                <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link-btn">
                                                    View Repo →
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
            <ul className="socials">  
                <a href="http://www.linkedin.com/in/adedevs" target="_blank" rel="noreferrer"><li><ion-icon name="logo-linkedin"></ion-icon></li></a>
                <a href="https://twitter.com/adedevs" target="_blank" rel="noreferrer"><li><ion-icon name="logo-twitter"></ion-icon></li></a>
                <a href="https://www.github.com/adedevs" target="_blank" rel="noreferrer"><li><ion-icon name="logo-github"></ion-icon></li></a>
            </ul>
        </>
    )
}

{/* <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://joltbyade.vercel.app/" target="_blank"><img src={Jolt} alt="" /></a>
                            <a className="project-mob" href="https://joltbyade.vercel.app/" target="_blank"><img src={JoltMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://joltbyade.vercel.app/" target="_blank">Jolt</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://rotatebyade.vercel.app/" target="blank"><img src={Rotate} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://rotatebyade.vercel.app/" target="blank">rotate</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://kryptykscissors.web.app" target="blank"><img src={Gallery} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://gallerybyade.vercel.app/" target="blank">Gallery</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://auspices.vercel.app/" target="_blank"><img src={Auspices} alt="" /></a>
                            <a className="project-mob" href="https://auspices.vercel.app/" target="_blank"><img src={AuspicesMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://auspices.vercel.app/" target="_blank">Auspices</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://fundraiserbyade.vercel.app/" target="_blank"><img src={Fundraiser} alt="" /></a>
                            <a className="project-mob" href="https://fundraiserbyade.vercel.app/" target="_blank"><img src={FundraiserMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://fundraiserbyade.vercel.app/" target="_blank">Fundraiser</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://soigaagency.vercel.app/" target="_blank"><img src={Soiga} alt="" /></a>
                            <a className="project-mob" href="https://soigaagency.vercel.app/" target="_blank"><img src={SoigaMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://soigaagency.vercel.app/" target="_blank">Soiga</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a className="project-desk" href="https://adeloopstudio.web.app/" target="_blank"><img src={Loopstudios} alt="" /></a>
                            <a className="project-mob" href="https://adeloopstudio.web.app/" target="_blank"><img src={LoopstudiosMob} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://adeloopstudio.web.app/" target="_blank">Loopstudios</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section>
                    <section className="project-card">
                        <div className="project-img">
                            <a href="https://kryptykscissors.web.app" target="blank"><img src={Scissors} alt="" /></a>
                        </div>
                        <div className="project-info">
                            <h1><a href="https://brookebyade.vercel.app/" target="blank">Scissors</a></h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ea voluptatum aut corrupti.
                            </p>
                        </div>
                    </section> */}
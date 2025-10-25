import React from "react";
import Section from "../../components/Section";
import myPic from '../../images/profile-eng.jpg';
import myResume from "../../pdfs/Kellerman_Resume_2025_Tech_Web_2.pdf";
import { SocialIcon } from "react-social-icons";
import "./style.css";

export default class Portfolio extends React.Component {
  handleScrollTo = ref => {
    const distance = this.refs[ref].offsetTop - 100;
    window.scrollTo({ top: distance, behavior: "smooth" });
  };

  render() {

    return (
      <div className="engineering">
        <p className="eng__looking-for-link"><a href="/">Looking for my<br />Filmmaker portfolio?</a></p>
        <Section theName="eng__topCard">
          <div className="eng__namecard">
            <div className="eng__namecard__text">
              <h1>Joshua M Kellerman</h1>
              <h3>Principal Software Engineer</h3>
            </div>
            <div className='eng__namecard__image'>
              <img src={myPic} alt='Joshua M Kellerman headshot' />
            </div>
          </div>
        </Section>
        <Section theName="eng__experience">
          <h3>Charlotte, NC | NYC Metro Area | SF Bay Area | LA Metro Area</h3>
          <p><a href="/contact">✉️ Contact Me - Form</a></p>
          <h3><strong>Experience</strong></h3>
          <div className="eng__socialIcons">
            <SocialIcon url="https://www.linkedin.com/in/joshua-m-kellerman-718a1b31/" />
          </div>
          <span><a href="https://www.linkedin.com/in/joshua-m-kellerman-718a1b31/">Find me on LinkedIn</a></span>
          <p><a href={myResume}>📃 Download my Resume</a></p>
        </Section>
        <Section theName="eng__projects">
          <h3><strong>Major Projects</strong></h3>
          <h4 style={{ "margin-bottom": 0 }}>Credit Karma Credit Ecosystem Team - 2024-Present</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Senior Back-End Engineer</h5>
          <ul>
            <li>Major Data Microservices Consolidation</li>
            <ul>
              <li>Project and Technical lead on Credit Ecosystem core backend team, offline data.</li>
              <li>Spearheaded simplifying infrastructure from three services to one.</li>
              <ul><li>Code and process improvement led to processing roughly 50% data volume due to enhanced data cleanliness with a 75% increase in data quality.</li></ul>
              <li>Technology: Cloud services, GCP, Messaging Queues, RPC, Scala, Twitter Finagle framework. Also, RDBs, BigQuery, Python, Scala, Kafka, Pubsub, Memcached</li>
            </ul>
            <li>Envisioned and standardized Twitter Finagle microservice architecture across Credit Ecosystem services.</li>
            <ul><li>Roadmap and execution, starting with consolidated service.</li></ul>
            <li>Ran weekly university-course style Scala sessions weekly to uplevel and mentor Junior engineers.</li>
            <ul><li>Upleveled several Junior engineers to mid-level Scala performing engineers.</li></ul>
            <li>Project lead partnering with major Credit Bureaus to solve state drift issues and improve data quality.</li>
            <ul><li>Process improvement led to increased revenue of roughly $2M a year for CK due to resolved data inconsistencies.</li></ul>
            <li>Worked with VPs of Data to clarify and solve major data inconsistancy issue in our data lake.</li>
            <ul><li>This was concerning certain lines of credit with certain members. Discovery contributed directly to contributing to enhanced strategy for Intuit.</li></ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Echo360 Capture Team - 2022-2023</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Principal Full-Stack Engineer / EM</h5>
          <ul>
            <li>Upgraded Echo360 Capture Infrastructure to Support 4-channel video capture and playback</li>
            <ul>
              <li>Team lead to update systems, including media processing pipeline, microservices, and Advanced Learning Platform monolith.</li>
              <li>Covered codebases and libraries in Scala, CPP, Java, and GoLang</li>
            </ul>
          </ul>
          <ul>
            <li>Created Chaptering Microservice</li>
            <ul>
              <li>Team lead on architecture and project management.</li>
              <li>Proof-of-Concept: Integrated with transformer neural net to supply chaptering and chapter heading information for Echo360 captured videos and lectures.</li>
              <li>Front-end integrated into monolithic app with React.js</li>
              <li>Microservice built in Scala and Play Framework, containerized in Docker.</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Twitter Health Org SRE Team - 2022</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Sr. Full-Stack Engineer</h5>
          <ul>
            <li>Twitter Health Org DORA Four Keys Dashboard</li>
            <ul>
              <li>Designed and implemented a method of data extraction for the Twitter Ecosystem, tracking Workflows and Commits per-team, then sending the metadata to BigQuery and an in-house instance of the <a href="https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance" target="_">Google Four Keys project</a>.</li>
            </ul>
          </ul>
          <ul>
            <li>Twitter Health Deployment Tracker Dashboard</li>
            <ul>
              <li>Designed and implemented a dashboard in Python, React, and Redux for generating per-team high-priority Deployment and Workflows KPIs across the Twitter Health ogranization.</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Twitter Safety Mode - 2021</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Sr. Scala Engineer</h5>
          <ul>
            <li>Twitter Safety Mode Lead Backend Engineer</li>
            <ul>
              <li>Designed and implemented a generalized Socialgraph edge TTL system in Kafka, Twitter Strato, and Thrift, for Smartblocking expirations</li>
              <li>Designed and implemented the Twitter Safetymode Smartblocking User timeline with help from the Socialgraph team</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Twitter Report Flow New Architecture Migration - 2020/2021</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Sr. Scala Engineer</h5>
          <ul>
            <li>Migrated entities on the full-stack HUX user reporting flow</li>
            <ul>
              <li>Migrated report flow for Twitter Lists, Moments, and Profiles</li>
              <li>Created official documentation for the new report flow architecture</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Mosaix.ai NLU Engine - 2019</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Senior A.I. Engineer (NLP - Transformers)</h5>
          <ul>
            <li>Redesigned NLU Engine and microservices in Scala, Python, Docker, Redis, AWS, GCP</li>
            <li>Substantial gain in quality of service:</li>
            <ul>
              <li>4000% overall application query throughput</li>
              <li>Query stability increase to 100%</li>
              <li>Implemented concurrency: 20 concurrent requests per VM with &gt; 50% reduction in individual query latency</li>
            </ul>
            <li>Redesigned for rapid development and growth:</li>
            <ul>
              <li>Built out dockerized microservices for PyTorch and Stanford NLTK in Python</li>
              <li>Lead for "text analysis" components service, where customers can buy use of any one micro-service. Evaluated for end-users' use by a top-10 tech company.</li>
              <li>Built out testing / debugging / logging framework</li>
              <li>Set up cloud-based common development back end for NLU Engine to ensure devops consistency among developers</li>
            </ul>
            <li>Knowledge Graph:</li>
            <ul>
              <li>Designed, prepared data for, updated and trained machine learning ranking models, knowledge graph for Spotify data</li>
              <li>200% higher coverage and 2-3% higher accuracy</li>
              <li>Oversaw design of data structure and edges for Wikidata scraping for Personal Assistant SDK</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Mosaix.ai Recommendations Engine - 2019</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Architect / Engineer</h5>
          <ul>
            <li>Rebuilt the cache / Recommendations engine for a tight deadline in Redis, MySQL, and Typescript</li>
            <li>Fluidly served hundreds of thousands of Arabic and Hindi end-users daily</li>
            <li>Designed blacklist for accepting ban requests of content that customers deemed obscene, keyed by locality and language</li>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Mosaix.ai API - 2018-2019</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Engineer</h5>
          <ul>
            <li>Built API business components in NodeJs, Typescript, Javascript, Redis, MongoDB, Bash</li>
            <ul>
              <li>Built a tiered user account system for customers based on access tokens</li>
              <li>Built middlewares such as authentication, rate limiter</li>
              <li>Integrated Elasticsearch</li>
              <li>Integrated search cache in Redis</li>
              <li>Built systems for testing / debugging / logging framework</li>
              <li>Built tasks for scraping, refreshing cache, etc.</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Yubico UX/UI - 2017-2018</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Lead UX Engineer</h5>
          <ul>
            <li>Oversaw research, design, and implementation of UX / UI on desktop/mobile, web applications, packaging, and media</li>
            <ul>
              <li>Spearheaded remake of the Windows Login Tool through UX research</li>
              <li>Grouped Yubico customers into five concrete cohorts for better messaging and UX</li>
              <li>Presented findings to C-level board of Yubico and changed direction of UX</li>
              <li>Designed a common User-Flow experience for all of U2F / FIDO2 web-facing apps, for technology partners</li>
              <li>Redesigned and implemented UI for YubiKey Manager 1.0.0 in QT Creator, QML, and Python</li>
            </ul>
            <li>Project owner for Video Production Team</li>
            <ul>
              <li>Created almost all of Yubico's commercials and video spots</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Yubico Website and eCommerce - 2016-2018</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Lead Web Engineer</h5>
          <ul>
            <li>Project owner for Web Team</li>
            <ul>
              <li>Prototyped, designed and developed Yubico’s “Solutions Integrations” page in D3.JS and JQuery</li>
              <li>Planning and implementation of new eCommerce architecture based on Magento API, NodeJS / Express.js, Docker, Kubernetes, SCSS, Webpack, React with Redux store and Jest</li>
              <li>Developer, designer, and code maintainer of Yubico’s website – Wordpress / WooCommerce with custom theme</li>
            </ul>
          </ul>
          <h4 style={{ "margin-bottom": 0 }}>Yubico YubiKey for Windows Hello - 2016</h4>
          <h5 style={{ "margin-top": "10px", "margin-bottom": "10px" }}>Role: Designer and Principal Engineer</h5>
          <ul>
            <li>Designed and Engineered the YubiKey for Windows Hello native Windows 10 Universal Windows Platform app</li>
            <ul>
              <li>Worked with and mentored by Yubico’s CTO and Head of R&D, Jakob Ehrensvard</li>
              <li>Communicated with YubiKey USB hardware via APDU commands in C</li>
              <li>Designed a user experience that would be used in all applications for U2F and FIDO2 hardware across the internet</li>
              <li>Worked with Microsoft to ensure security, resulting in a long-lasting partnership between Yubico and Microsoft</li>
            </ul>
          </ul>
        </Section>
        <Section theName="eng__skills">
          <h3><strong>Skillset</strong></h3>
          <h5>Engineering and Project Management</h5>
          <ul>
            <li>Engineering Management and Project Management</li>
            <li>Stakeholder Meetings, Timeframe Estimation, Sprint Planning, Engineer Support</li>
            <li>AGILE, SCRUM, Kanban: Scoping, Organization, Task Delegation, and Story Points</li>
            <li>Technical and Cultural Hiring</li>
            <li>Development, Code Reviews, and Post-Mortems</li>
            <li>Production level Cloud Service Design in AWS and Google Cloud - Docker, K8s, SQS, API Gateway, etc.</li>
            <li>CI/CD Pipeline Setup - Git, Stage/Test/Production, Workflows, Chef, Ansible, etc.</li>
          </ul>
          <h5>Artificial Intelligence / Machine Learning</h5>
          <ul>
            <li>Python: PyTorch, Pandas</li>
            <li>BERT & Transformers with Stanford NLTK (2019)</li>
            <li>Knowledge Graph Entity and Edge Design, Reverse Lookup</li>
            <li>Experience with CNNs (machine vision), RNNs, Decision Trees, Deep Neural Networks</li>
            <li>Very keen interest in Graph Neural Networks</li>
          </ul>
          <h5>Application Engineering / Cloud</h5>
          <ul>
            <li><strong>Object Oriented, Functional, and Imperative Programming:</strong> Scala, Python, Java, Javascript / Typescript, PHP 5/7, CPP, C#, C, GoLang</li>
            <li><strong>Data, Streaming and Messaging Pipelines:</strong> Spark, Hadoop, Kafka, SQS, Cassandra</li>
            <li><strong>Cloud:</strong> Docker, Kubernetes, AWS, DynamoDB, GCP, API Gateway, Elasticsearch</li>
            <li><strong>Databases:</strong> Postgres, SQL, Mongo / NoSQL, Redis</li>
            <li><strong>Scala:</strong> Play, Cats, Finatra / Finagle</li>
            <li><strong>Typescript / Javascript:</strong> NodeJs, npm, React.js, Redux, ExpressJS</li>
            <li><strong>Web Security:</strong> OAuth 2.0 Token-based authentication with U2F, FIDO2, SSO</li>
            <li><strong>PHP-based eCommerce:</strong> WooCommerce, Magento, Wordpress</li>
            <li><strong>Testing Coverage:</strong> Unit and Functional</li>
            <li>API Design and implementation on multiple frameworks, including middlewares</li>
          </ul>
          <h5>User Experience / Design</h5>
          <ul>
            <li>UX Testing</li>
            <li>Wireframing and Storyboarding</li>
            <li>Front-end web development</li>
            <li>Video Production and Screenplay Writing</li>
            <li>Adobe Creative Suite</li>
            <li>Logo Design, UI Design, 2D and 3D Art</li>
            <li>DaVinci Resolve Pro, Blender 3D</li>
          </ul>
        </Section>
      </div>
    );
  }
}

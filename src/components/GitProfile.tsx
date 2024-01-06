import React, { Fragment, type ReactNode } from 'react';
// import HeadTagEditor from './head-tag-editor';
// import ThemeChanger from './theme-changer';
import AvatarCard from './avatar-card';
import Detail from './detail';
// import Skill from './skill';
// import Experience from './experience';
import Certification from './certification';
import Education from './education';
import Footer from './footer';
// import Project from './project';
import '../assets/index.css';
// import ExternalProject from './external-project';
import { defaultColors } from '../assets/consts';
import { connect } from 'react-redux';
import { type AppDispatch } from '../store';
import { githubThunk } from '../store/slices/gitprofile.slice';
import type GithubProfileConfig from '../shared/interfaces/config.interface';
import Language from './language';

// const GitProfile2 = ({ config }) => {
//   const [error, setError] = useState(
//     typeof config === 'undefined' && !config ? noConfigError : null,
//   )
//   const [sanitizedConfig] = useState(
//     typeof config === 'undefined' && !config ? null : sanitizeConfig(config),
//   )
//   const [theme, setTheme] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [profile, setProfile] = useState(null)
//   const [repo, setRepo] = useState(null)

//   useEffect(() => {
//     if (sanitizedConfig) {
//       setTheme(getInitialTheme(sanitizedConfig.themeConfig))
//       setupHotjar(sanitizedConfig.hotjar)
//       loadData()
//     }
//   }, [sanitizedConfig])

//   useEffect(() => {
//     theme && document.documentElement.setAttribute('data-theme', theme)
//   }, [theme])GitProfile
//   const loadData = useCallback(() => {
//     axios
//       .get(`https://api.github.com/users/${sanitizedConfig.github.username}`)
//       .then((response) => {
//         let data = response.data

//         let profileData = {
//           avatar: data.avatar_url,
//           name: data.name ? data.name : '',
//           bio: data.bio ? data.bio : '',
//           location: data.location ? data.location : '',
//           company: data.company ? data.company : '',
//         }

//         setProfile(profileData)
//         return data
//       })
//       .then((userData) => {
//         let excludeRepo = ``
//         if (userData.public_repos === 0) {
//           setRepo([])
//           return
//         }

//         sanitizedConfig.github.exclude.projects.forEach((project) => {
//           excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`
//         })

//         let query = `user:${
//           sanitizedConfig.github.username
//         }+fork:${!sanitizedConfig.github.exclude.forks}${excludeRepo}`

//         let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`

//         axios
//           .get(url, {'@/shared/interfaces''@/shared/interfaces'
//             },
//           })
//           .then((response) => {
//             let data = response.data

//             setRepo(data.items)
//           })
//           .catch((error) => {
//             handleError(error)
//           })
//       })
//       .catch((error) => {
//         handleError(error)
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }, [setLoading])
//   const handleError = (error) => {
//     console.error('Error:', error)
//     try {
//       let reset = formatDistance(
//         new Date(error.response.headers['x-ratelimit-reset'] * 1000),
//         new Date(),
//         {
//           addSuffix: true,
//         },
//       )

//       if (error.response.status === 403) {
//         setError(tooManyRequestError(reset))
//       } else if (error.response.status === 404) {
//         setError(notFoundError)
//       } else {
//         setError(genericError)sanitizedConfig && (
//       }
//     } catch (error2) {
//       setError(genericError)
//     }
//   }

//   return (
//     <ErrorBoundary {...error}>
//       {sanitizedConfig && (
//         <HeadTagEditor
//           profile={profile}
//           theme={theme}
//           googleAnalytics={sanitizedConfig.googleAnalytics}
//           social={sanitizedConfig.social}
//         />
//       )}
//       <div className="fade-in h-screen">
//         {sanitizedConfig && (
//           <Fragment>
//             <div className={`p-4 lg:p-10 min-h-full ${defaultColors.bg}`}>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
//                 <div className="col-span-1">
//                   <div className="grid grid-cols-1 gap-6">
//                     {!sanitizedConfig.themeConfig.disableSwitch && (
//                       <ThemeChanger
//                         theme={theme}
//                         setTheme={setTheme}
//                         loading={loading}
//                         themeConfig={sanitizedConfig.themeConfig}
//                       />
//                     )}
//                     <AvatarCard
//                       profile={profile}
//                       loading={loading}
//                       avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
//                       resume={sanitizedConfig.resume}
//                     />githubLoaderActions
//                       github={sanitizedConfig.github}
//                       social={sanitizedConfig.social}
//                     />
//                     <Skill loading={loading} skills={sanitizedConfig.skills} />
//                     <Experience
//                       loading={loading}
//                       experiences={sanitizedConfig.experiences}'@/shared/interfaces''@/shared/interfaces'
//                   export default   <Education
//                       loading={loading}
//                       education={sanitizedConfig.education}
//                     />
//                     <Certification
//                       loading={loading}
//                       certifications={sanitizedConfig.certifications}
//                     /> */}
//                   </div>
//                 </div>
//                 {/* <div className="lg:col-span-2 col-span-1">
//                   <div className="grid grid-cols-1 gap-6">
//                     <Project
//                       repo={repo}
//                       loading={loading}
//                       github={sanitizedConfig.github}
//                       googleAnalytics={sanitizedConfig.googleAnalytics}
//                     />
//                     <ExternalProject
//                       loading={loading}
//                       externalProjects={sanitizedConfig.externalProjects}
//                       googleAnalytics={sanitizedConfig.googleAnalytics}
//                     />
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </Fragment>
//         )}
//       </div>
//     </ErrorBoundary>
//   )
// }

class GitProfile extends React.Component<
  GithubProfileConfig & { dispatch: AppDispatch },
  any,
  any
> {
  constructor(props: GithubProfileConfig & { dispatch: AppDispatch }) {
    super(props);
  }

  async componentDidMount(): Promise<void> {
    this.props.dispatch(githubThunk(this.props.github));
  }

  render(): ReactNode {
    return (
      <>
        {/* {sanitizedConfig && (
          <HeadTagEditor
            profile={profile}
            theme={theme}
            googleAnalytics={sanitizedConfig.googleAnalytics}
            social={sanitizedConfig.social}
          />
        )} */}
        <div className="fade-in h-screen">
          <Fragment>
            <div className={`p-4 lg:p-10 min-h-full ${defaultColors.bg}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {/* {!sanitizedConfig.themeConfig.disableSwitch && (
                        <ThemeChanger
                          theme={theme}
                          setTheme={setTheme}
                          loading={loading}
                          themeConfig={sanitizedConfig.themeConfig}
                        />
                      )} */}
                    <AvatarCard />
                    <Detail />
                    <Language />
                    <Education />
                    <Certification />
                    {/* <Skill loading={loading} skills={sanitizedConfig.skills} />
                      <Expe'@/shared/interfaces''@/shared/interfaces'rience
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                      <Education
                        loading={loading}
                        education={sanitizedConfig.education}
                      />
                      <Certification
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      /> */}
                  </div>
                </div>
                {/* <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <Project
                        repo={repo}
                        loading={loading}
                        github={sanitizedConfig.github}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <ExternalProject
                        loading={loading}
                        externalProjects={sanitizedConfig.externalProjects}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                    </div>
                  </div> */}
              </div>
            </div>
            <Footer />
          </Fragment>
        </div>
      </>
    );
  }
}

const mapStateTopProps = (state: GithubProfileConfig) => {
  return state;
};
export default connect(mapStateTopProps)(GitProfile);
